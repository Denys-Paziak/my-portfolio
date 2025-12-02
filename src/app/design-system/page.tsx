"use client";

import * as React from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { Container } from "../components/ui/Container";
import { Separator } from "../components/ui/Separator";
import { Stack } from "../components/ui/Stack";
import { Accordion, AccordionItem } from "../components/ui/Accordion";
import { Skeleton } from "../components/ui/Skeleton";
import { useToast } from "../components/ui/Toast";
import { Select } from "../components/ui/Select";
import { Checkbox } from "../components/ui/Checkbox";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/Table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardImage,
    CardTitle,
} from "../components/ui/Card";
import { List, ListItem } from "../components/ui/List";
import { Avatar, AvatarGroup } from "../components/ui/Avatar";
import { Rating } from "../components/ui/Rating";
import { Spinner, ProgressBar } from "../components/ui/Loader";
import { EmptyState } from "../components/ui/EmptyState";
import { Carousel, CarouselItem } from "../components/ui/Carousel";
import { StatusPage } from "../components/ui/StatusPage";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../components/ui/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "../components/ui/DropdownMenu";
import {
    ArrowRight,
    Mail,
    Send,
    Terminal,
    Check,
    ChevronDown,
    Menu,
    X,
    Github,
    Twitter,
    Linkedin,
    Code2,
    Cpu,
    Globe,
    Zap,
    ArrowUpRight,
    Plus,
    Minus,
    Search,
    User,
    Bell,
    Settings,
    FileText,
    Image as ImageIcon,
    Music,
    Home,
    LayoutGrid,
    Users,
    LogOut,
    Filter,
} from "lucide-react";

export default function DesignSystem() {
    const { toast } = useToast();
    const [selectValue, setSelectValue] = React.useState("");

    return (
        <main className="min-h-screen bg-background text-foreground p-12 md:p-24 space-y-24">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight">Design System</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A collection of reusable components and styles used throughout the application.
                    This ensures consistency in design and behavior.
                </p>
            </div>

            {/* Foundations */}
            <section className="space-y-12">
                <h2 className="text-2xl font-mono text-muted-foreground uppercase tracking-widest border-b border-[var(--glass-border)] pb-4">
                    01. Foundations
                </h2>

                {/* Colors */}
                <div className="space-y-4">
                    <Text variant="mono" className="text-accent">
                        Colors
                    </Text>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="space-y-3">
                            <div className="h-24 rounded-lg bg-background border border-[var(--glass-border)]" />
                            <div className="space-y-1">
                                <p className="font-medium">Background</p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    --background
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-lg bg-foreground" />
                            <div className="space-y-1">
                                <p className="font-medium">Foreground</p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    --foreground
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-lg bg-accent" />
                            <div className="space-y-1">
                                <p className="font-medium">Accent</p>
                                <p className="text-xs text-muted-foreground font-mono">--accent</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-lg bg-card border border-[var(--glass-border)]" />
                            <div className="space-y-1">
                                <p className="font-medium">Card</p>
                                <p className="text-xs text-muted-foreground font-mono">--card</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Spacing & Radius */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <Text variant="mono" className="text-accent">
                            Spacing Scale
                        </Text>
                        <div className="space-y-2">
                            {[4, 8, 16, 24, 32, 48, 64].map((space) => (
                                <div key={space} className="flex items-center gap-4">
                                    <span className="w-12 text-xs font-mono text-muted-foreground">
                                        {space}px
                                    </span>
                                    <div
                                        className="h-4 bg-accent/20 rounded-sm border border-accent/10"
                                        style={{ width: space }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Text variant="mono" className="text-accent">
                            Border Radius
                        </Text>
                        <div className="flex flex-wrap gap-4">
                            {[
                                "rounded-sm",
                                "rounded-md",
                                "rounded-lg",
                                "rounded-xl",
                                "rounded-2xl",
                                "rounded-3xl",
                                "rounded-full",
                            ].map((radius) => (
                                <div key={radius} className="flex flex-col items-center gap-2">
                                    <div
                                        className={`w-16 h-16 border border-[var(--glass-border)] bg-white/5 ${radius}`}
                                    />
                                    <span className="text-xs font-mono text-muted-foreground">
                                        {radius.replace("rounded-", "")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Shadows & Effects */}
                <div className="space-y-4">
                    <Text variant="mono" className="text-accent">
                        Effects (Glass & Shadows)
                    </Text>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="h-32 rounded-xl bg-background border border-[var(--glass-border)] flex items-center justify-center">
                            <span className="text-sm text-muted-foreground">No Effect</span>
                        </div>
                        <div className="h-32 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md flex items-center justify-center">
                            <span className="text-sm text-foreground font-medium">Glass</span>
                        </div>
                        <div className="h-32 rounded-xl bg-card border border-[var(--glass-border)] shadow-2xl flex items-center justify-center">
                            <span className="text-sm text-foreground font-medium">Shadow-2xl</span>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Grid System */}
                <div className="space-y-4">
                    <Text variant="mono" className="text-accent">
                        Grid System (12 Column)
                    </Text>
                    <div className="grid grid-cols-12 gap-4 p-4 border border-dashed border-[var(--glass-border)] rounded-lg bg-accent/5">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-12 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-xs text-accent font-mono"
                            >
                                {i + 1}
                            </div>
                        ))}
                        <div className="col-span-6 h-12 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-xs text-accent font-mono">
                            col-span-6
                        </div>
                        <div className="col-span-6 h-12 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-xs text-accent font-mono">
                            col-span-6
                        </div>
                        <div className="col-span-4 h-12 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-xs text-accent font-mono">
                            col-span-4
                        </div>
                        <div className="col-span-4 h-12 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-xs text-accent font-mono">
                            col-span-4
                        </div>
                        <div className="col-span-4 h-12 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-xs text-accent font-mono">
                            col-span-4
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Icons */}
                <div className="space-y-4">
                    <Text variant="mono" className="text-accent">
                        Iconography (Lucide React)
                    </Text>
                    <div className="flex flex-wrap gap-6 p-6 border border-[var(--glass-border)] rounded-xl bg-card">
                        {[
                            ArrowRight,
                            Mail,
                            Send,
                            Terminal,
                            Check,
                            ChevronDown,
                            Menu,
                            X,
                            Github,
                            Twitter,
                            Linkedin,
                            Code2,
                            Cpu,
                            Globe,
                            Zap,
                            ArrowUpRight,
                            Plus,
                            Minus,
                            Search,
                            User,
                            Bell,
                            Settings,
                        ].map((Icon, i) => (
                            <div
                                key={i}
                                className="p-3 rounded-lg bg-white/5 border border-[var(--glass-border)] text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                            >
                                <Icon className="w-6 h-6" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="space-y-12">
                <Heading
                    level={2}
                    variant="mono"
                    className="text-muted-foreground border-b border-[var(--glass-border)] pb-4"
                >
                    02. Typography
                </Heading>

                {/* Font Families */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Text variant="mono" className="text-accent">
                                Primary Font
                            </Text>
                            <span className="text-xs text-muted-foreground font-mono">
                                Geist Sans
                            </span>
                        </div>
                        <div className="p-6 border border-[var(--glass-border)] rounded-xl bg-white/5">
                            <p className="text-4xl font-sans mb-4">Aa</p>
                            <p className="text-lg text-muted-foreground">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                <br />
                                abcdefghijklmnopqrstuvwxyz
                                <br />
                                1234567890
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Text variant="mono" className="text-accent">
                                Mono Font
                            </Text>
                            <span className="text-xs text-muted-foreground font-mono">
                                Geist Mono
                            </span>
                        </div>
                        <div className="p-6 border border-[var(--glass-border)] rounded-xl bg-white/5">
                            <p className="text-4xl font-mono mb-4">Aa</p>
                            <p className="text-lg font-mono text-muted-foreground">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                <br />
                                abcdefghijklmnopqrstuvwxyz
                                <br />
                                1234567890
                            </p>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Scale */}
                <div className="space-y-8">
                    <Text variant="mono" className="text-accent">
                        Type Scale
                    </Text>
                    <div className="space-y-6">
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                H1 / 5xl
                            </div>
                            <div className="col-span-10">
                                <Heading level={1}>The quick brown fox</Heading>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                H2 / 4xl
                            </div>
                            <div className="col-span-10">
                                <Heading level={2}>The quick brown fox</Heading>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                H3 / 3xl
                            </div>
                            <div className="col-span-10">
                                <Heading level={3}>The quick brown fox</Heading>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                H4 / 2xl
                            </div>
                            <div className="col-span-10">
                                <Heading level={4}>The quick brown fox</Heading>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                Body Lg
                            </div>
                            <div className="col-span-10">
                                <Text size="lg">The quick brown fox jumps over the lazy dog.</Text>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                Body
                            </div>
                            <div className="col-span-10">
                                <Text>The quick brown fox jumps over the lazy dog.</Text>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                Small
                            </div>
                            <div className="col-span-10">
                                <Text size="sm">The quick brown fox jumps over the lazy dog.</Text>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-baseline gap-4">
                            <div className="col-span-2 text-xs text-muted-foreground font-mono">
                                Tiny
                            </div>
                            <div className="col-span-10">
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                    The quick brown fox
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Weights & Spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <Text variant="mono" className="text-accent">
                            Weights
                        </Text>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="font-thin text-2xl">Aa</span>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Thin (100)
                                </span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="font-light text-2xl">Aa</span>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Light (300)
                                </span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="font-normal text-2xl">Aa</span>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Regular (400)
                                </span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="font-medium text-2xl">Aa</span>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Medium (500)
                                </span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="font-semibold text-2xl">Aa</span>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Semibold (600)
                                </span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="font-bold text-2xl">Aa</span>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Bold (700)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Text variant="mono" className="text-accent">
                            Letter Spacing
                        </Text>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <p className="text-xl tracking-tighter">Tracking Tighter</p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    tracking-tighter (-0.05em)
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xl tracking-tight">Tracking Tight</p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    tracking-tight (-0.025em)
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xl tracking-normal">Tracking Normal</p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    tracking-normal (0)
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xl tracking-wide">Tracking Wide</p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    tracking-wide (0.025em)
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xl tracking-widest uppercase">Tracking Widest</p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    tracking-widest (0.1em)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* UI Rules & Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <Text variant="mono" className="text-accent">
                            UI Text Rules
                        </Text>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="px-4 py-2 bg-accent text-accent-foreground font-semibold text-sm rounded">
                                    Button Text
                                </div>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Semibold / Sm
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-red-500 text-sm">Error message text</div>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Text-Red-500 / Sm
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-muted-foreground text-xs uppercase tracking-wider font-mono">
                                    Label / Caption
                                </div>
                                <span className="text-xs text-muted-foreground font-mono">
                                    Mono / Uppercase / Wider
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Text variant="mono" className="text-accent">
                            Highlights & Accents
                        </Text>
                        <div className="space-y-4">
                            <p className="text-2xl font-bold text-accent">Accent Color Text</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                                Gradient Text (White)
                            </p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
                                Gradient Text (Accent)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className="space-y-8">
                <h2 className="text-2xl font-mono text-muted-foreground uppercase tracking-widest border-b border-[var(--glass-border)] pb-4">
                    03. Buttons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground font-mono">Primary</p>
                        <div className="flex flex-col gap-4 items-start">
                            <Button variant="primary" size="sm">
                                Small Button
                            </Button>
                            <Button variant="primary" size="md">
                                Medium Button
                            </Button>
                            <Button variant="primary" size="lg">
                                Large Button
                            </Button>
                            <Button variant="primary">
                                With Icon
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground font-mono">Secondary</p>
                        <div className="flex flex-col gap-4 items-start">
                            <Button variant="secondary" size="sm">
                                Small Button
                            </Button>
                            <Button variant="secondary" size="md">
                                Medium Button
                            </Button>
                            <Button variant="secondary" size="lg">
                                Large Button
                            </Button>
                            <Button variant="secondary">
                                With Icon
                                <Mail className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground font-mono">Ghost</p>
                        <div className="flex flex-col gap-4 items-start">
                            <Button variant="ghost" size="sm">
                                Small Button
                            </Button>
                            <Button variant="ghost" size="md">
                                Medium Button
                            </Button>
                            <Button variant="ghost" size="lg">
                                Large Button
                            </Button>
                            <Button variant="ghost">
                                With Icon
                                <Terminal className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forms */}
            <section className="space-y-8">
                <Heading
                    level={2}
                    variant="mono"
                    className="text-muted-foreground border-b border-[var(--glass-border)] pb-4"
                >
                    04. Forms
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                    <div className="space-y-4">
                        <Text variant="mono">Inputs</Text>
                        <div className="space-y-4">
                            <Input placeholder="Default Input" />
                            <Input placeholder="Error State" error />
                            <Input placeholder="Disabled Input" disabled />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Text variant="mono">Textarea</Text>
                        <Textarea placeholder="Enter your message..." />
                    </div>
                    <div className="space-y-4">
                        <Text variant="mono">Select (Dropdown)</Text>
                        <div className="relative z-20">
                            <Select
                                placeholder="Choose a framework..."
                                value={selectValue}
                                onChange={setSelectValue}
                                options={[
                                    { label: "Next.js", value: "next" },
                                    { label: "React", value: "react" },
                                    { label: "Vue", value: "vue" },
                                    { label: "Svelte", value: "svelte" },
                                    { label: "Angular", value: "angular" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Text variant="mono">Checkbox</Text>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <Checkbox id="terms" />
                                <label htmlFor="terms" className="text-sm text-muted-foreground">
                                    Accept terms and conditions
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="checked" checked readOnly />
                                <label htmlFor="checked" className="text-sm text-muted-foreground">
                                    Checked state
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Elements */}
            <section className="space-y-8">
                <Heading
                    level={2}
                    variant="mono"
                    className="text-muted-foreground border-b border-[var(--glass-border)] pb-4"
                >
                    05. Content Elements
                </Heading>
                <div className="space-y-12">
                    {/* Cards */}
                    <div className="space-y-4">
                        <Text variant="mono">Cards</Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Simple Card</CardTitle>
                                    <CardDescription>
                                        This is a basic card with header.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Card content goes here. It can be text, images, or anything
                                        else.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="secondary">
                                        Action
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="p-0">
                                <CardImage
                                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                    alt="Abstract"
                                />
                                <CardHeader>
                                    <CardTitle>Media Card</CardTitle>
                                    <CardDescription>Card with an image header.</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>

                    {/* Lists */}
                    <div className="space-y-4">
                        <Text variant="mono">Lists</Text>
                        <div className="bg-card border border-[var(--glass-border)] rounded-xl p-4">
                            <List>
                                <ListItem
                                    icon={<FileText className="w-4 h-4" />}
                                    action={
                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                            <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    }
                                >
                                    Documentation.pdf
                                </ListItem>
                                <ListItem
                                    icon={<ImageIcon className="w-4 h-4" />}
                                    action={
                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                            <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    }
                                >
                                    Project_Screenshot.png
                                </ListItem>
                                <ListItem
                                    icon={<Music className="w-4 h-4" />}
                                    action={
                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                            <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    }
                                >
                                    Background_Music.mp3
                                </ListItem>
                            </List>
                        </div>
                    </div>

                    {/* Avatars & Ratings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <Text variant="mono">Avatar Group</Text>
                            <AvatarGroup limit={3}>
                                <Avatar src="https://github.com/shadcn.png" fallback="CN" />
                                <Avatar src="https://github.com/vercel.png" fallback="VC" />
                                <Avatar fallback="AB" />
                                <Avatar fallback="CD" />
                                <Avatar fallback="EF" />
                            </AvatarGroup>
                        </div>
                        <div className="space-y-4">
                            <Text variant="mono">Rating</Text>
                            <div className="flex flex-col gap-2">
                                <Rating value={4} />
                                <Rating value={3} readOnly className="opacity-50" />
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="space-y-4">
                        <Text variant="mono">Data Table</Text>
                        <div className="border border-[var(--glass-border)] rounded-xl overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Invoice</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Method</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">INV001</TableCell>
                                        <TableCell>Paid</TableCell>
                                        <TableCell>Credit Card</TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">INV002</TableCell>
                                        <TableCell>Pending</TableCell>
                                        <TableCell>PayPal</TableCell>
                                        <TableCell className="text-right">$150.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">INV003</TableCell>
                                        <TableCell>Unpaid</TableCell>
                                        <TableCell>Bank Transfer</TableCell>
                                        <TableCell className="text-right">$350.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Badges */}
            <section className="space-y-8">
                <h2 className="text-2xl font-mono text-muted-foreground uppercase tracking-widest border-b border-[var(--glass-border)] pb-4">
                    05. Badges
                </h2>
                <div className="flex flex-wrap gap-4">
                    <Badge>Default Badge</Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                        Accent Badge
                    </Badge>
                    <Badge className="border border-foreground/20 bg-transparent text-foreground">
                        Outline Badge
                    </Badge>
                </div>
            </section>

            {/* Layout */}
            <section className="space-y-8">
                <Heading
                    level={2}
                    variant="mono"
                    className="text-muted-foreground border-b border-[var(--glass-border)] pb-4"
                >
                    06. Layout
                </Heading>
                <Stack gap={8}>
                    <div className="space-y-2">
                        <Text variant="mono">Container</Text>
                        <div className="bg-white/5 border border-dashed border-white/20 p-4 rounded-lg">
                            <Container className="bg-accent/10 border border-accent/20 p-4 text-center text-accent">
                                Max Width Container (XL)
                            </Container>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Text variant="mono">Stack (Row + Gap 4)</Text>
                        <Stack direction="row" gap={4} className="bg-white/5 p-4 rounded-lg">
                            <div className="w-12 h-12 bg-accent/20 rounded" />
                            <div className="w-12 h-12 bg-accent/40 rounded" />
                            <div className="w-12 h-12 bg-accent/60 rounded" />
                        </Stack>
                    </div>
                    <div className="space-y-2">
                        <Text variant="mono">Separator</Text>
                        <Stack gap={4} className="bg-white/5 p-8 rounded-lg">
                            <Text>Above</Text>
                            <Separator />
                            <Text>Below</Text>
                            <Separator variant="technical" />
                            <Text>Technical Below</Text>
                        </Stack>
                    </div>
                </Stack>
            </section>

            {/* Navigation */}
            <section className="space-y-8">
                <Heading
                    level={2}
                    variant="mono"
                    className="text-muted-foreground border-b border-[var(--glass-border)] pb-4"
                >
                    07. Navigation
                </Heading>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Sidebar & Menus */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Text variant="mono">Sidebar Structure</Text>
                            <div className="h-[400px] border border-[var(--glass-border)] rounded-xl overflow-hidden flex">
                                <Sidebar>
                                    <SidebarHeader>
                                        <div className="flex items-center gap-2 font-bold text-xl">
                                            <div className="w-8 h-8 bg-accent rounded-lg" />
                                            App
                                        </div>
                                    </SidebarHeader>
                                    <SidebarContent>
                                        <List>
                                            <ListItem icon={<Home className="w-4 h-4" />}>
                                                Dashboard
                                            </ListItem>
                                            <ListItem icon={<LayoutGrid className="w-4 h-4" />}>
                                                Projects
                                            </ListItem>
                                            <ListItem icon={<Users className="w-4 h-4" />}>
                                                Team
                                            </ListItem>
                                            <ListItem icon={<Settings className="w-4 h-4" />}>
                                                Settings
                                            </ListItem>
                                        </List>
                                    </SidebarContent>
                                    <SidebarFooter>
                                        <div className="flex items-center gap-3">
                                            <Avatar size="sm" fallback="ME" />
                                            <div className="text-xs">
                                                <p className="font-medium">My Account</p>
                                                <p className="text-muted-foreground">Pro Plan</p>
                                            </div>
                                        </div>
                                    </SidebarFooter>
                                </Sidebar>
                                <div className="flex-1 bg-white/5 p-8">
                                    <div className="h-full border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground">
                                        Main Content Area
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs & Search */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <Text variant="mono">Tabs</Text>
                            <div className="p-6 border border-[var(--glass-border)] rounded-xl">
                                <Tabs className="w-full">
                                    <TabsList className="grid w-full grid-cols-3 mb-4">
                                        <TabsTrigger
                                            value="account"
                                            activeValue="account"
                                            className="data-[state=active]:bg-accent"
                                        >
                                            Account
                                        </TabsTrigger>
                                        <TabsTrigger value="password" activeValue="account">
                                            Password
                                        </TabsTrigger>
                                        <TabsTrigger value="settings" activeValue="account">
                                            Settings
                                        </TabsTrigger>
                                    </TabsList>
                                    <div className="p-4 bg-white/5 rounded-lg border border-[var(--glass-border)]">
                                        <Text>Account settings content area.</Text>
                                    </div>
                                </Tabs>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Text variant="mono">Search & Filters</Text>
                            <div className="space-y-4">
                                <Input
                                    placeholder="Search projects..."
                                    icon={<Search className="w-5 h-5" />}
                                />
                                <div className="flex gap-2">
                                    <DropdownMenu
                                        trigger={
                                            <Button variant="secondary" size="sm">
                                                <Filter className="w-4 h-4 mr-2" />
                                                Filter Status
                                            </Button>
                                        }
                                    >
                                        <DropdownMenuLabel>Status</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                                            Active
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                                            Pending
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                                            Archived
                                        </DropdownMenuItem>
                                    </DropdownMenu>

                                    <DropdownMenu
                                        trigger={
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="border border-[var(--glass-border)]"
                                            >
                                                Sort by: Date
                                                <ChevronDown className="w-4 h-4 ml-2" />
                                            </Button>
                                        }
                                    >
                                        <DropdownMenuItem>Date Created</DropdownMenuItem>
                                        <DropdownMenuItem>Last Modified</DropdownMenuItem>
                                        <DropdownMenuItem>Alphabetical</DropdownMenuItem>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Text variant="mono">Profile Menu</Text>
                            <div className="flex justify-start">
                                <DropdownMenu
                                    align="start"
                                    trigger={
                                        <div className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors">
                                            <Avatar
                                                src="https://github.com/shadcn.png"
                                                fallback="CN"
                                            />
                                            <div className="text-left">
                                                <p className="text-sm font-medium">Denis Pazak</p>
                                                <p className="text-xs text-muted-foreground">
                                                    admin@mysite.com
                                                </p>
                                            </div>
                                            <ChevronDown className="w-4 h-4 text-muted-foreground ml-2" />
                                        </div>
                                    }
                                >
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="w-4 h-4 mr-2" />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="w-4 h-4 mr-2" />
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell className="w-4 h-4 mr-2" />
                                        Notifications
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-500 hover:text-red-400">
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive & Feedback */}
            <section className="space-y-8">
                <Heading
                    level={2}
                    variant="mono"
                    className="text-muted-foreground border-b border-[var(--glass-border)] pb-4"
                >
                    08. Interactive & Feedback
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Carousel */}
                    <div className="space-y-4 md:col-span-2">
                        <Text variant="mono">Carousel</Text>
                        <Carousel className="w-full max-w-2xl mx-auto">
                            <CarouselItem>
                                <div className="h-64 bg-accent/10 flex items-center justify-center text-accent font-bold text-2xl">
                                    Slide 1
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="h-64 bg-white/5 flex items-center justify-center text-foreground font-bold text-2xl">
                                    Slide 2
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="h-64 bg-accent/5 flex items-center justify-center text-accent font-bold text-2xl">
                                    Slide 3
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>

                    {/* Status Pages */}
                    <div className="space-y-4 md:col-span-2">
                        <Text variant="mono">Status Pages (Preview)</Text>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border border-[var(--glass-border)] rounded-xl bg-card overflow-hidden">
                                <StatusPage type="success" className="min-h-[400px]" />
                            </div>
                            <div className="border border-[var(--glass-border)] rounded-xl bg-card overflow-hidden">
                                <StatusPage type="404" className="min-h-[400px]" />
                            </div>
                            <div className="border border-[var(--glass-border)] rounded-xl bg-card overflow-hidden">
                                <StatusPage type="offline" className="min-h-[400px]" />
                            </div>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        <Text variant="mono">Accordion</Text>
                        <div className="p-6 border border-[var(--glass-border)] rounded-xl bg-card">
                            <Accordion type="single" className="w-full">
                                <AccordionItem value="item-1" trigger="Is it accessible?">
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionItem>
                                <AccordionItem value="item-2" trigger="Is it styled?">
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionItem>
                                <AccordionItem value="item-3" trigger="Is it animated?">
                                    Yes. It&apos;s animated by default, but you can disable it if
                                    you prefer.
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    {/* Skeleton & Toast */}
                    <Stack gap={8}>
                        <div className="space-y-4">
                            <Text variant="mono">Skeleton Loading</Text>
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Text variant="mono">Toast Notifications</Text>
                            <div className="flex gap-4 flex-wrap">
                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        toast({
                                            title: "Success!",
                                            message: "Your changes have been saved.",
                                            type: "success",
                                        })
                                    }
                                >
                                    Show Success Toast
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="border border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                                    onClick={() =>
                                        toast({
                                            title: "Error",
                                            message: "Something went wrong.",
                                            type: "error",
                                        })
                                    }
                                >
                                    Show Error Toast
                                </Button>
                            </div>
                        </div>
                    </Stack>
                </div>
            </section>
        </main>
    );
}
