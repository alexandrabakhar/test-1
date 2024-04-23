type Nullable<T> = T | null

type RootState = import('./app/providers/StoreProvider').RootState

type AppDispatch = import('./app/providers/StoreProvider').AppDispatch
