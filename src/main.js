import { createOidcUserManager, processSilentSignInCallback } from './services/oidc-helpers'
import createStoreModule from './store/create-store-module'
import createRouterMiddleware from './router/create-router-middleware'

export const vuexOidcCreateUserManager = createOidcUserManager

export const vuexOidcCreateStoreModule = createStoreModule

export const vuexOidcCreateRouterMiddleware = createRouterMiddleware

export const vuexOidcProcessSilentSignInCallback = processSilentSignInCallback
