import { lazy } from "react";

export const SomeLazyComponent = lazy(()=>import('./SomeComponent'))