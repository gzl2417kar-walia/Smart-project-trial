
CREATE TABLE public.kpi_metrics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  total_calls_handled INTEGER NOT NULL DEFAULT 0,
  tickets_resolved INTEGER NOT NULL DEFAULT 0,
  average_csat NUMERIC(4,2) NOT NULL DEFAULT 0,
  active_agents INTEGER NOT NULL DEFAULT 0,
  emails_pending INTEGER NOT NULL DEFAULT 0,
  missed_calls INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.kpi_metrics TO anon, authenticated;
GRANT ALL ON public.kpi_metrics TO service_role;

ALTER TABLE public.kpi_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "kpi_metrics readable by everyone"
  ON public.kpi_metrics FOR SELECT
  USING (true);

INSERT INTO public.kpi_metrics
  (total_calls_handled, tickets_resolved, average_csat, active_agents, emails_pending, missed_calls)
VALUES
  (1284, 942, 4.62, 18, 27, 6);
