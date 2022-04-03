import React, { FormEvent } from 'react';
import { AlertColor } from '@mui/material/Alert';
import { TypographyTypeMap } from '@mui/material/Typography';

//  UI TYPES
export interface StyledMainProps {
  component: string;
}

export interface CardProps {
  children: React.ReactNode;
  wrapper: string;
  headingType: string;
  headingText: string;
  headingSize: TypographyTypeMap['props']['variant'];
}

export interface StyledCardProps {
  component: string;
}

export interface StyledTypographyProps {
  component: string;
  variant: TypographyTypeMap['props']['variant'];
}

export interface FooterListItemProps {
  tooltip: string;
  href: string;
  icon: React.ElementType;
  text: string;
}

export interface StyledToolbarProps {
  component: string;
}

export interface NavListItemProps {
  text: string;
  path: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

//  PROFILE TYPES
export type UserDataObject = {
  firstName: string;
  lastName: string;
  email: string;
};

//  HOME TYPES
export interface TechListItemProps {
  icon: string;
  text: string;
}

//  FORM TYPES
export interface AuthCardProps {
  component: string;
}

export interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e?: FormEvent<HTMLFormElement> | undefined) => void;
}

//  CUSTOM HOOK TYPES
export type AuthRequestFunction = (
  isLogin: boolean,
  values: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }
) => Promise<void>;

export type EditProfileObject = {
  firstName: string;
  lastName: string;
  email: string;
};

export type ShowAlertFunction = (
  type: AlertColor,
  message: string,
  error?: unknown
) => void;

//  CONTEXT TYPES
export interface User {
  uid: string | undefined;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}

export type AlertStateObject = {
  open: boolean;
  message: string;
  type: AlertColor;
};
