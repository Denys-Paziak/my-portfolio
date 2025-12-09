"use client";

import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";

interface SocialBlockBody extends Matter.Body {
    labelText?: string;
    labelColor?: string;
    url?: string;
}

const SOCIAL_BLOCKS = [
    {
        id: "instagram",
        label: "Instagram",
        color: "#E1306C",
        textColor: "#FFFFFF",
        url: "https://instagram.com/denyspaziak",
        width: 140,
        height: 60,
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        color: "#0A66C2",
        textColor: "#FFFFFF",
        url: "https://linkedin.com/in/denyspaziak",
        width: 140,
        height: 60,
    },
    {
        id: "facebook",
        label: "Facebook",
        color: "#1877F2",
        textColor: "#FFFFFF",
        url: "https://facebook.com/denyspaziak",
        width: 140,
        height: 60,
    },
    {
        id: "github",
        label: "GitHub",
        color: "#FFFFFF", // White for visibility on dark
        textColor: "#000000",
        url: "https://github.com/denyspaziak",
        width: 140,
        height: 70,
    },
];

export function PhysicsSocialBlocks() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);
    const bodiesMapRef = useRef<Map<string, string>>(new Map()); // Body ID -> URL
    const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !sceneRef.current) return;

        const scene = sceneRef.current;
        const width = scene.clientWidth;
        const height = scene.clientHeight;

        if (width === 0 || height === 0) {
            // Retry if no dimensions yet
            const id = requestAnimationFrame(() => setIsMounted((v) => !v)); // Force re-effect
            return () => cancelAnimationFrame(id);
        }

        // Cleanup any existing engine to be safe (though dependency array handles it)
        if (engineRef.current) Matter.Engine.clear(engineRef.current);
        if (renderRef.current?.canvas) renderRef.current.canvas.remove();

        // Engine
        const engine = Matter.Engine.create();
        engineRef.current = engine;

        // Render
        const render = Matter.Render.create({
            element: scene,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });
        renderRef.current = render;

        // Boundaries
        const wallOptions = {
            isStatic: true,
            render: { fillStyle: "transparent" },
        };
        const ground = Matter.Bodies.rectangle(width / 2, height + 60, width, 120, wallOptions);
        const ceiling = Matter.Bodies.rectangle(width / 2, -1000, width, 100, wallOptions); // High ceiling
        const leftWall = Matter.Bodies.rectangle(-60, height / 2, 120, height * 2, wallOptions);
        const rightWall = Matter.Bodies.rectangle(
            width + 60,
            height / 2,
            120,
            height * 2,
            wallOptions
        );

        // Blocks
        const bodies: Matter.Body[] = [];
        SOCIAL_BLOCKS.forEach((block, i) => {
            const x = width / 2 + (Math.random() - 0.5) * 100; // Slight random X spread
            const y = -150 - i * 150; // Deterministic Y spacing to prevent overlapping
            const body = Matter.Bodies.rectangle(x, y, block.width, block.height, {
                chamfer: { radius: 10 },
                render: {
                    fillStyle: block.color,
                    strokeStyle: "rgba(255,255,255,0.2)",
                    lineWidth: 1,
                    // Use text as sprite capability is limited, we'll draw text in afterRender
                },
                angle: (Math.random() - 0.5) * Math.PI * 0.1, // Less rotation initially
                restitution: 0.5,
                friction: 0.8,
            }) as SocialBlockBody;

            // Tag body with info for interactions and rendering
            body.labelText = block.label;
            body.labelColor = block.textColor;
            body.url = block.url;

            bodiesMapRef.current.set(body.id.toString(), block.url);
            bodies.push(body);
        });

        // Add everything to world
        Matter.Composite.add(engine.world, [ground, ceiling, leftWall, rightWall, ...bodies]);

        // Mouse Control
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });
        mouseConstraintRef.current = mouseConstraint;
        Matter.Composite.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Custom Click Handling
        Matter.Events.on(mouseConstraint, "mouseup", (event) => {
            const mousePosition = event.mouse.position;
            const bodies = Matter.Query.point(engine.world.bodies, mousePosition);
            if (bodies.length > 0) {
                const body = bodies[0] as SocialBlockBody;
                const url = body.url;
                if (url && !body.isStatic) {
                    // Ideally check for drag distance etc, but for now open link
                    window.open(url, "_blank");
                }
            }
        });

        // Rendering Text on Blocks
        Matter.Events.on(render, "afterRender", () => {
            const context = render.context;
            // context.font = "16px 'Outfit', sans-serif"; // Context font doesn't support custom fonts well if not loaded
            context.font = "bold 16px sans-serif";
            context.textAlign = "center";
            context.textBaseline = "middle";

            bodies.forEach((bodyMesh) => {
                const body = bodyMesh as SocialBlockBody;
                if (!body.labelText) return;

                const { x, y } = body.position;
                const { labelText, labelColor } = body;
                const angle = body.angle;

                context.save();
                context.translate(x, y);
                context.rotate(angle);
                context.fillStyle = labelColor || "#000";
                context.fillText(labelText, 0, 0);
                context.restore();
            });
        });

        // Run
        Matter.Render.run(render);
        const runner = Matter.Runner.create();
        runnerRef.current = runner;
        Matter.Runner.run(runner, engine);

        // Handle Resize
        const handleResize = () => {
            if (!sceneRef.current) return;
            const newWidth = sceneRef.current.clientWidth;
            const newHeight = sceneRef.current.clientHeight;

            render.canvas.width = newWidth;
            render.canvas.height = newHeight;

            Matter.Body.setPosition(ground, Matter.Vector.create(newWidth / 2, newHeight + 60));
            Matter.Body.setPosition(ceiling, Matter.Vector.create(newWidth / 2, -200));
            Matter.Body.setPosition(leftWall, Matter.Vector.create(-60, newHeight / 2));
            Matter.Body.setPosition(rightWall, Matter.Vector.create(newWidth + 60, newHeight / 2));

            // Re-create ground vertices to match new width
            Matter.Body.setVertices(
                ground,
                Matter.Bodies.rectangle(newWidth / 2, newHeight + 60, newWidth, 120).vertices
            );
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            Matter.World.clear(engine.world, false);
            Matter.Engine.clear(engine);
        };
    }, [isMounted]);

    return (
        <div
            ref={sceneRef}
            className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing"
            aria-label="Interactive falling blocks"
        />
    );
}
