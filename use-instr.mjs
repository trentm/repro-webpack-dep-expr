import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
registerInstrumentations({
  instrumentations: [new HttpInstrumentation()],
});

import {get} from 'http';
console.log('get is', get);
