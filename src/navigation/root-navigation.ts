import { createNavigationContainerRef } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function reset(name:any){
  if(navigationRef.isReady()){
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: name }
        ],
      })
    )
  }
}

/**
 * Ref: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 * How to use navigation.navigate from a component outside the stack.navigation
 */
