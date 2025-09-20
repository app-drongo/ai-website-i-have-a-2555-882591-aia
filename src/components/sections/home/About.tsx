'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  FormInput,
  Zap,
  Shield,
} from 'lucide-react';

export default function About() {
  const handleReadStory = () => {
    console.log('Navigate to full story page');
  };

  const handleViewTeam = () => {
    console.log('Navigate to team page');
  };

  const values = [
    {
      icon: FormInput,
      title: 'Form-First Design',
      description:
        'We believe every form should be beautiful, intuitive, and conversion-focused. Our design philosophy puts user experience at the heart of data collection.',
    },
    {
      icon: Zap,
      title: 'Speed & Simplicity',
      description:
        'Build professional forms in minutes, not hours. Our drag-and-drop builder eliminates complexity while maintaining powerful functionality.',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description:
        "GDPR compliance and enterprise-grade security are built into every form. Your data and your users' privacy are our top priorities.",
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description:
        "From small businesses to Fortune 500 companies, we're democratizing professional form building across 25+ countries worldwide.",
    },
  ];

  const stats = [
    { value: '2021', label: 'Founded', icon: Award },
    { value: '50K+', label: 'Active Users', icon: Users },
    { value: '99.9%', label: 'Uptime', icon: TrendingUp },
    { value: '25+', label: 'Countries', icon: Globe },
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Co-Founder',
      image: 'AR',
      bio: 'Former Product Lead at SurveyTech. 12+ years building data collection platforms.',
    },
    {
      name: 'Maya Patel',
      role: 'CTO & Co-Founder',
      image: 'MP',
      bio: 'Ex-Typeform engineer. Expert in form optimization and conversion analytics.',
    },
    {
      name: 'Jordan Kim',
      role: 'Head of Product',
      image: 'JK',
      bio: 'Former Google Forms PM. Passionate about user-centric form design.',
    },
    {
      name: 'Sam Chen',
      role: 'VP of Engineering',
      image: 'SC',
      bio: 'Former Salesforce architect. Specializes in scalable form infrastructure.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            About FormFlow
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing How
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Forms Are Built
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of form enthusiasts, UX designers, and data scientists on a
            mission to make professional form building accessible, powerful, and delightful for
            everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our FormFlow Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2021 by frustrated marketers and developers, we set out to solve a
                critical problem: why were beautiful, high-converting forms still so difficult to
                create?
              </p>
              <p>
                After countless hours wrestling with clunky form builders, poor mobile experiences,
                and limited customization options, we knew the form building industry needed a
                revolution.
              </p>
              <p>
                Today, FormFlow powers over 50,000 active users worldwide, helping businesses
                collect data more effectively with forms that users actually want to complete.
              </p>
            </div>
            <Button onClick={handleReadStory} className="group bg-primary hover:bg-primary/90">
              Read Our Full Journey
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every form should convert like crazy and feel amazing to fill out. That's the
                      FormFlow difference."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Alex Rivera, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/10 hover:border-primary/30 transition-colors bg-gradient-to-b from-card to-muted/20"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Drives FormFlow</h3>
            <p className="text-muted-foreground">
              The core principles that shape every feature we build and every form experience we
              create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/10 hover:border-primary/30 transition-all duration-300 group bg-gradient-to-br from-card to-muted/10"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">The FormFlow Team</h3>
            <p className="text-muted-foreground">
              Meet the form building experts working tirelessly to make data collection beautiful
              and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/10 hover:border-primary/30 transition-all duration-300 group bg-gradient-to-b from-card to-muted/10"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleViewTeam}
              variant="outline"
              className="group border-primary/20 hover:border-primary/40"
            >
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "FormFlow transformed our lead generation completely. Our form completion rates
                increased by 340% and the drag-and-drop builder saved us weeks of development time."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MR
                </div>
                <div className="text-left">
                  <div className="font-semibold">Maria Rodriguez</div>
                  <div className="text-sm text-muted-foreground">
                    Marketing Director, GrowthCorp
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
