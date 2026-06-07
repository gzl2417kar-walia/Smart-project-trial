
CREATE TABLE IF NOT EXISTS public.agents (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  agent_name text NOT NULL,
  status text NOT NULL DEFAULT 'Available',
  calls_handled integer NOT NULL DEFAULT 0,
  tickets_resolved integer NOT NULL DEFAULT 0,
  csat numeric NOT NULL DEFAULT 0,
  resolution_rate numeric NOT NULL DEFAULT 0,
  shift_timing text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.agents TO authenticated;
GRANT ALL ON public.agents TO service_role;
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "agents readable by authenticated" ON public.agents FOR SELECT TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.pattern_insights (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  insight_text text NOT NULL,
  severity text NOT NULL DEFAULT 'low',
  recommendation text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.pattern_insights TO authenticated;
GRANT ALL ON public.pattern_insights TO service_role;
ALTER TABLE public.pattern_insights ENABLE ROW LEVEL SECURITY;
CREATE POLICY "pattern_insights readable by authenticated" ON public.pattern_insights FOR SELECT TO authenticated USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_agents_updated_at BEFORE UPDATE ON public.agents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_pattern_insights_updated_at BEFORE UPDATE ON public.pattern_insights
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
