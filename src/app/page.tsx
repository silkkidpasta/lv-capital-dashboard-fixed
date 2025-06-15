"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpRight, TrendingUp, Building, DollarSign, Users, Download, Plus, Target, BarChart3, PieChart } from "lucide-react";

export default function Dashboard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);

  const metrics = [
    {
      title: "Total Portfolio Value",
      value: "$2.8M",
      change: "+12.5%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Active Investments",
      value: "8",
      change: "+2 this month",
      icon: Building,
      trend: "up"
    },
    {
      title: "Annual Return",
      value: "18.3%",
      change: "+3.2% vs last year",
      icon: TrendingUp,
      trend: "up"
    },
    {
      title: "Partner Network",
      value: "156",
      change: "+24 this quarter",
      icon: Users,
      trend: "up"
    }
  ];

  const opportunities = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      location: "Downtown Miami",
      type: "Residential Development",
      targetReturn: "22%",
      minimumInvestment: "$250,000",
      timeline: "18 months",
      fundingProgress: 75,
      status: "Available"
    },
    {
      id: 2,
      title: "Commercial Plaza",
      location: "Austin, TX",
      type: "Commercial Real Estate",
      targetReturn: "16%",
      minimumInvestment: "$500,000",
      timeline: "24 months",
      fundingProgress: 45,
      status: "Available"
    },
    {
      id: 3,
      title: "Mixed-Use Development",
      location: "Nashville, TN",
      type: "Mixed-Use",
      targetReturn: "20%",
      minimumInvestment: "$100,000",
      timeline: "30 months",
      fundingProgress: 90,
      status: "Nearly Full"
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Investment Preference",
      description: "Define your investment criteria and risk tolerance"
    },
    {
      step: 2,
      title: "Opportunity Selection",
      description: "Choose from curated investment opportunities"
    },
    {
      step: 3,
      title: "Due Diligence",
      description: "Review detailed property analysis and projections"
    },
    {
      step: 4,
      title: "Investment Commitment",
      description: "Finalize terms and commit your investment"
    }
  ];

  const handleExportPDF = () => {
    // Mock PDF export functionality
    alert("Portfolio report generated! Download will begin shortly.");
  };

  const handleMetricClick = (metricTitle: string) => {
    alert(`Viewing detailed analytics for: ${metricTitle}`);
  };

  const handleInvestNow = (opportunityTitle: string) => {
    alert(`Starting investment process for: ${opportunityTitle}`);
    setIsWorkflowOpen(true);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeInvestment = () => {
    alert("Investment process completed successfully!");
    setIsWorkflowOpen(false);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-lv-cream">
      {/* Header */}
      <header className="bg-lv-navy shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-lv-cream">LV Capital Partners</h1>
              <p className="text-lv-gold text-sm mt-1">Investment Dashboard</p>
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={handleExportPDF}
                variant="outline" 
                className="border-lv-gold text-lv-gold hover:bg-lv-gold hover:text-lv-navy"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Dialog open={isWorkflowOpen} onOpenChange={setIsWorkflowOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-lv-gold text-lv-navy hover:bg-lv-gold/90">
                    <Plus className="w-4 h-4 mr-2" />
                    New Investment
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-lv-navy text-2xl">Investment Workflow</DialogTitle>
                    <DialogDescription>
                      Complete your investment in 4 simple steps
                    </DialogDescription>
                  </DialogHeader>
                  
                  {/* Progress indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      {workflowSteps.map((step) => (
                        <div 
                          key={step.step}
                          className={`flex items-center ${step.step <= currentStep ? 'text-lv-gold' : 'text-gray-400'}`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            step.step <= currentStep ? 'bg-lv-gold text-lv-navy' : 'bg-gray-200 text-gray-500'
                          }`}>
                            {step.step}
                          </div>
                          <span className="ml-2 text-sm font-medium">{step.title}</span>
                        </div>
                      ))}
                    </div>
                    <Progress value={(currentStep / 4) * 100} className="h-2" />
                  </div>

                  {/* Step content */}
                  <div className="py-6">
                    <h3 className="text-xl font-semibold text-lv-navy mb-4">
                      {workflowSteps[currentStep - 1].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {workflowSteps[currentStep - 1].description}
                    </p>

                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="investment-amount">Investment Amount</Label>
                          <Input id="investment-amount" placeholder="$100,000" />
                        </div>
                        <div>
                          <Label htmlFor="risk-tolerance">Risk Tolerance</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select risk level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="conservative">Conservative</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="aggressive">Aggressive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {opportunities.slice(0, 2).map((opp) => (
                          <Card key={opp.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <CardTitle className="text-lg">{opp.title}</CardTitle>
                              <CardDescription>{opp.location}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <p><strong>Target Return:</strong> {opp.targetReturn}</p>
                                <p><strong>Minimum:</strong> {opp.minimumInvestment}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Due Diligence Documents</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <Badge variant="secondary" className="mr-2">PDF</Badge>
                                Property Appraisal Report
                              </li>
                              <li className="flex items-center">
                                <Badge variant="secondary" className="mr-2">PDF</Badge>
                                Market Analysis
                              </li>
                              <li className="flex items-center">
                                <Badge variant="secondary" className="mr-2">PDF</Badge>
                                Financial Projections
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Investment Summary</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p><strong>Property:</strong> Luxury Residential Complex</p>
                              <p><strong>Investment Amount:</strong> $250,000</p>
                              <p><strong>Expected Return:</strong> 22% annually</p>
                              <p><strong>Timeline:</strong> 18 months</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>

                  <DialogFooter>
                    {currentStep > 1 && (
                      <Button variant="outline" onClick={prevStep}>
                        Previous
                      </Button>
                    )}
                    {currentStep < 4 ? (
                      <Button onClick={nextStep} className="bg-lv-gold text-lv-navy hover:bg-lv-gold/90">
                        Next Step
                      </Button>
                    ) : (
                      <Button onClick={completeInvestment} className="bg-lv-gold text-lv-navy hover:bg-lv-gold/90">
                        Complete Investment
                      </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={index} 
                className="luxury-card cursor-pointer"
                onClick={() => handleMetricClick(metric.title)}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-lv-navy">
                    {metric.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-lv-gold" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-lv-navy">{metric.value}</div>
                  <p className="text-xs text-lv-teal flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    {metric.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Investment Opportunities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lv-navy text-xl">Current Investment Opportunities</CardTitle>
            <CardDescription>
              Carefully selected real estate investments offering superior risk-adjusted returns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="luxury-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-lv-navy">{opportunity.title}</CardTitle>
                        <CardDescription className="text-lv-teal">{opportunity.location}</CardDescription>
                      </div>
                      <Badge 
                        variant={opportunity.status === "Available" ? "default" : "secondary"}
                        className={opportunity.status === "Available" ? "bg-lv-gold text-lv-navy" : ""}
                      >
                        {opportunity.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Target Return</p>
                        <p className="font-semibold text-lv-navy">{opportunity.targetReturn}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Timeline</p>
                        <p className="font-semibold text-lv-navy">{opportunity.timeline}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-600">Minimum Investment</p>
                        <p className="font-semibold text-lv-navy">{opportunity.minimumInvestment}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Funding Progress</span>
                        <span className="text-lv-navy font-semibold">{opportunity.fundingProgress}%</span>
                      </div>
                      <Progress value={opportunity.fundingProgress} className="h-2" />
                    </div>

                    <Button 
                      onClick={() => handleInvestNow(opportunity.title)}
                      className="w-full bg-lv-navy text-lv-cream hover:bg-lv-navy/90"
                      disabled={opportunity.status === "Nearly Full"}
                    >
                      {opportunity.status === "Nearly Full" ? "Almost Full" : "Invest Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="luxury-card cursor-pointer" onClick={() => handleMetricClick("Portfolio Analytics")}>
            <CardHeader>
              <CardTitle className="text-lv-navy flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-lv-gold" />
                Portfolio Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">View detailed performance metrics and projections</p>
            </CardContent>
          </Card>

          <Card className="luxury-card cursor-pointer" onClick={() => handleMetricClick("Investment Goals")}>
            <CardHeader>
              <CardTitle className="text-lv-navy flex items-center">
                <Target className="w-5 h-5 mr-2 text-lv-gold" />
                Investment Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Track progress towards your financial objectives</p>
            </CardContent>
          </Card>

          <Card className="luxury-card cursor-pointer" onClick={() => handleMetricClick("Market Insights")}>
            <CardHeader>
              <CardTitle className="text-lv-navy flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-lv-gold" />
                Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Stay informed with latest market trends and analysis</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}