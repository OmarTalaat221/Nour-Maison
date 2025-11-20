
'use client';  // لو انت عايز الكود ده يشتغل في المتصفح

import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer
})
