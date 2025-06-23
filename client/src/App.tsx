import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import HealthSector from "@/pages/health-sector";
import Engineering from "@/pages/engineering";
import Hospitality from "@/pages/hospitality";
import InformationTechnology from "@/pages/information-technology";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/health-sector" component={HealthSector} />
      <Route path="/engineering" component={Engineering} />
      <Route path="/hospitality" component={Hospitality} />
      <Route path="/information-technology" component={InformationTechnology} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
