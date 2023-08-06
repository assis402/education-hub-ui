"use client";

import { AuthType } from '@/types/AuthType';
import { createContext } from 'react';

export const AuthContext = createContext<AuthType>({} as AuthType);