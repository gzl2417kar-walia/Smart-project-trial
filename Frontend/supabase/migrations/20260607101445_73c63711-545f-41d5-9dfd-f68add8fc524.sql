
-- kpi_metrics: remove public read
DROP POLICY IF EXISTS "kpi_metrics readable by everyone" ON public.kpi_metrics;
REVOKE SELECT ON public.kpi_metrics FROM anon;
GRANT SELECT ON public.kpi_metrics TO authenticated;
CREATE POLICY "kpi_metrics readable by authenticated"
  ON public.kpi_metrics FOR SELECT
  TO authenticated
  USING (true);

-- reports: remove public read
DROP POLICY IF EXISTS "reports readable by everyone" ON public.reports;
REVOKE SELECT ON public.reports FROM anon;
CREATE POLICY "reports readable by authenticated"
  ON public.reports FOR SELECT
  TO authenticated
  USING (true);
