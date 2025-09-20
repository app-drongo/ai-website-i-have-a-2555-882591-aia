'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Users,
  Database,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Drag & Drop Builder',
      description:
        'Create professional forms in minutes with our intuitive visual editor. No coding required.',
      badge: 'Builder',
    },
    {
      icon: Shield,
      title: 'GDPR Compliant',
      description:
        'Enterprise-grade security with SSL encryption and full GDPR compliance for data protection.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description:
        'Forms automatically adapt to any device. Perfect user experience on desktop, tablet, and mobile.',
      badge: 'Responsive',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description:
        'Reach global audiences with forms in 40+ languages and automatic translation features.',
      badge: 'Global',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Track form performance, conversion rates, and user behavior with detailed insights dashboard.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'Custom Themes',
      description:
        'Match your brand perfectly with unlimited color schemes, fonts, and custom CSS options.',
      badge: 'Design',
    },
    {
      icon: Code2,
      title: 'Advanced Logic',
      description:
        'Create smart forms with conditional fields, skip logic, and dynamic content based on responses.',
      badge: 'Logic',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Work together seamlessly with role-based permissions and real-time collaborative editing.',
      badge: 'Teamwork',
    },
    {
      icon: Database,
      title: '1000+ Integrations',
      description:
        'Connect with Zapier, Salesforce, HubSpot, Slack, and hundreds of other tools you already use.',
      badge: 'Integrations',
    },
  ];

  const handleStartBuilding = () => {
    window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-6 py-2 text-sm bg-primary/5 border-primary/20"
          >
            Powerful Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Build Amazing Forms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            FormFlow combines simplicity with power. Create stunning forms, collect responses, and
            gain insights - all in one beautiful platform trusted by 50,000+ businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all duration-500" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-500 group-hover:scale-110">
                      <Icon className="size-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-muted/60 hover:bg-primary/10 transition-colors"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Subtle Border Animation */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-all duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Transform Your Data Collection?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of businesses already using FormFlow to create beautiful forms and
              collect valuable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleStartBuilding}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Start Building Forms
              </button>
              <button
                onClick={handleViewDemo}
                className="px-8 py-4 border-2 border-primary/20 rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Watch Live Demo
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ✨ No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
