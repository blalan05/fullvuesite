<script lang="ts">
  import IndustryLanding from '$lib/industry-landing.svelte';
</script>

<IndustryLanding
  headline="Electrical contractors need quotes, permits, and trucks on the same sheet"
  lead="Residential and light commercial electrical work mixes service calls and multi-day projects. Margin lives in the gap between estimating and what actually ships from the supplier."
  painPoints={[
    'Parts run from job stock but never land on the invoice.',
    'Permit or panel upgrade scope changes hide in text threads.',
    'Service managers can’t see which crews are burning labor on callbacks.',
  ]}
  fitBullets={[
    'Opportunities and quotes connect to scheduled jobs without re-keying.',
    'Field schedules and job detail keep apprentices and leads aligned.',
    'Purchasing reconciles vendor bills against job draws and change orders.',
    'Invoices build from logged work so service and project AR stay auditable.',
  ]}
/>
