'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Free Builder',
      description: 'Perfect for personal projects and testing FormFlow',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 100 form responses/month',
        '5 active forms',
        'Basic form templates',
        'Email notifications',
        'CSV data export',
        'FormFlow branding',
      ],
      cta: 'Start Building Forms',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Pro Builder',
      description: 'Ideal for growing businesses and professional use',
      price: '$19',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited form responses',
        'Unlimited active forms',
        'Advanced form logic & branching',
        'Custom themes & branding',
        'Payment integrations (Stripe, PayPal)',
        'Advanced analytics dashboard',
        'API access & webhooks',
        'Priority email support',
        'Remove FormFlow branding',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      action: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'For large teams requiring advanced security & control',
      price: 'Custom',
      period: '',
      badge: 'White Glove Setup',
      features: [
        'Everything in Pro Builder',
        'Advanced user permissions',
        'SSO & SAML authentication',
        'Custom data retention policies',
        'Dedicated account manager',
        '99.9% uptime SLA',
        'Custom integrations',
        '24/7 phone & chat support',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            <Zap className="size-3 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Build Forms That Convert
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              At Any Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            From personal projects to enterprise solutions, FormFlow scales with your needs. Start
            free and upgrade as you grow - no setup fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted/50 rounded-lg border border-primary/10">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm border border-primary/20">
              Monthly Billing
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Billing
              <Badge variant="secondary" className="ml-2 text-xs bg-accent/20 text-accent">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                plan.popular
                  ? 'border-primary/50 shadow-xl shadow-primary/10 scale-105 bg-gradient-to-br from-card via-card to-primary/5'
                  : 'border-muted/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 shadow-lg">
                    <Star className="size-3 mr-1 fill-current" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Accent Border */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-secondary/10 text-secondary border-secondary/30"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2 text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6 text-muted-foreground">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div
                        className={cn(
                          'size-5 rounded-full flex items-center justify-center flex-shrink-0',
                          plan.popular
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        <Check className="size-3" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6 transition-all duration-300',
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl'
                      : 'border-primary/20 hover:bg-primary/5'
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                  <ArrowRight className="size-4 ml-2" />
                </Button>

                {plan.name === 'Pro Builder' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-card/50 to-muted/30 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Building complex forms for your enterprise? Our team will work with you to create a
              tailored FormFlow solution that fits your exact requirements and integrates seamlessly
              with your existing systems.
            </p>
            <Button
              onClick={handleScheduleDemo}
              variant="outline"
              size="lg"
              className="bg-background/50 border-primary/30 hover:bg-primary/5 hover:border-primary/50"
            >
              Schedule Strategy Call
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
