export type ReturnPoint = {
  path: string;
  scrollY: number;
};

export type NavigationState = {
  preserveScroll?: boolean;
  restoreScrollY?: number;
  returnStack?: ReturnPoint[];
};

export function getReturnStack(state: unknown): ReturnPoint[] {
  if (!state || typeof state !== "object" || !("returnStack" in state)) {
    return [];
  }

  const stack = (state as { returnStack?: unknown }).returnStack;

  if (!Array.isArray(stack)) {
    return [];
  }

  return stack.filter(
    (point): point is ReturnPoint =>
      Boolean(point) &&
      typeof point === "object" &&
      typeof (point as ReturnPoint).path === "string" &&
      typeof (point as ReturnPoint).scrollY === "number"
  );
}

export function createForwardState(state: unknown, path: string): NavigationState {
  return {
    returnStack: [
      ...getReturnStack(state),
      {
        path,
        scrollY: window.scrollY
      }
    ]
  };
}

export function createReturnNavigation(state: unknown, fallbackPath: string) {
  const stack = getReturnStack(state);
  const target = stack.length > 0 ? stack[stack.length - 1] : undefined;
  const remainingStack = stack.slice(0, -1);

  return {
    path: target?.path ?? fallbackPath,
    state: {
      preserveScroll: true,
      restoreScrollY: target?.scrollY,
      returnStack: remainingStack
    } satisfies NavigationState
  };
}
