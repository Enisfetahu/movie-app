
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  const { name, delta, value, id } = metric;
  
  console.log({ name, delta, value, id });
}

export { sendToAnalytics, getCLS, getFID, getLCP, getFCP, getTTFB };
