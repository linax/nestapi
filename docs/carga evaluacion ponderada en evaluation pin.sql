UPDATE public.evaluation_pin AS ep
SET weighted_evaluation = subquery.promedio_vie_orden
FROM (
    SELECT
        eup_pev_id,
        AVG(vie_orden) AS promedio_vie_orden
    FROM
        public.evaluacion_usuario_punto_evaluacion eup
    JOIN
        public.valor_evaluacion vae ON eup.eup_id = vae.vae_eup_id
    JOIN
        public.valor_item_punto_evaluacion vie ON vae.vae_vie_id = vie.vie_id
    GROUP BY
        eup_pev_id
) AS subquery
WHERE ep.id = subquery.eup_pev_id;