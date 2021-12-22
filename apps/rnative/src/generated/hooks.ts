// Code generated by wunderctl. DO NOT EDIT.

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { WunderGraphContext } from "./provider";
import { RequestOptions, MutateRequestOptions, SubscriptionRequestOptions, Response } from "./client";
import { MissionsInput, DragonsResponse, MissionsResponse } from "./models";

export const useWunderGraph = () => {
	const ctx = useContext(WunderGraphContext);
	if (ctx === undefined) {
		throw new Error("WunderGraphContext missing, make sure to put WunderGraphProvider at the root of your app");
	}
	return {
		client: ctx.client,
		onWindowFocus: ctx.onWindowFocus,
		onWindowBlur: ctx.onWindowBlur,
		initialized: ctx.initialized,
		initializing: ctx.initializing,
		refetchMountedQueries: ctx.refetchMountedQueries,
		setRefetchMountedQueries: ctx.setRefetchMountedQueries,
		queryCache: ctx.queryCache,
	};
};

interface InternalOptions {
	requiresAuthentication: boolean;
}

const Query = <R extends {}, I extends {}>(
	promiseFactory: (options: RequestOptions<I, R>) => Promise<Response<R>>,
	internalOptions: InternalOptions,
	options?: RequestOptions<I, R>
) => {
	const { initialized, onWindowFocus, refetchMountedQueries, queryCache } = useWunderGraph();
	const [_options, _setOptions] = useState<MutateRequestOptions<I> | undefined>(options);
	const [shouldFetch, setShouldFetch] = useState<boolean>(options === undefined || options.initialState === undefined);
	const refetch = useCallback((options?: RequestOptions<I, R>) => {
		if (options !== undefined) {
			_setOptions(options);
		}
		setShouldFetch(true);
	}, []);
	useEffect(() => {
		if (options && options.refetchOnWindowFocus === true) {
			setShouldFetch(true);
		}
	}, [onWindowFocus]);
	const [response, setResponse] = useState<Response<R>>(
		options !== undefined && options.initialState !== undefined
			? {
					status: "ok",
					body: options.initialState,
			  }
			: { status: "loading" }
	);
	useEffect(() => {
		if (!initialized) {
			return;
		}
		if (!shouldFetch) {
			return;
		}
		const abortController = new AbortController();
		if (response.status === "ok") {
			setResponse({ status: "ok", refetching: true, body: response.body });
		}
		const cacheKey = JSON.stringify(_options);
		const cached = queryCache[cacheKey];
		if (response.status !== "ok" && cached) {
			setResponse({
				status: "cached",
				body: cached as R,
			});
		}
		(async () => {
			const result = await promiseFactory({
				..._options,
				abortSignal: abortController.signal,
			});
			if (abortController.signal.aborted) {
				setResponse({ status: "aborted" });
				return;
			}
			if (result.status === "ok") {
				queryCache[cacheKey] = result.body;
			}
			setResponse(result);
			setShouldFetch(false);
		})();
		return () => {
			abortController.abort();
		};
	}, [initialized, shouldFetch, _options, promiseFactory]);
	useEffect(() => setShouldFetch(true), [refetchMountedQueries]);
	return {
		response,
		refetch,
	};
};

const Subscription = <R, I>(
	subscriptionFactory: (options: RequestOptions<I>, cb: (response: Response<R>) => void) => void,
	internalOptions: InternalOptions,
	options?: SubscriptionRequestOptions<I>
) => {
	const optionsJSON = JSON.stringify(options);
	const { initialized, refetchMountedQueries } = useWunderGraph();
	const [_options, _setOptions] = useState<RequestOptions<I> | undefined>(options);
	const [response, setResponse] = useState<Response<R>>({ status: "loading" });
	const [lastInit, setLastInit] = useState<boolean | undefined>();
	const computedInit = useMemo<boolean>(() => {
		if (lastInit === undefined) {
			setLastInit(initialized);
			return initialized;
		}
		if (options?.stopOnWindowBlur) {
			return initialized;
		}
		if (initialized) {
			setLastInit(true);
			return true;
		}
		return lastInit;
	}, [initialized, lastInit, optionsJSON]);
	useEffect(() => {
		_setOptions(options);
	}, [optionsJSON]);
	useEffect(() => {
		if (!computedInit) {
			return;
		}
		const controller = new AbortController();
		subscriptionFactory(
			{
				..._options,
				abortSignal: controller.signal,
			},
			(res) => {
				if (!controller.signal.aborted) setResponse(res);
			}
		);
		return () => {
			controller.abort();
		};
	}, [computedInit, _options, refetchMountedQueries]);
	return {
		response,
	};
};

export const useQuery = {
	Dragons: (options?: RequestOptions<never, DragonsResponse>) => {
		const { client } = useWunderGraph();
		return Query(client.query.Dragons, { requiresAuthentication: false }, options);
	},
	Missions: (options: RequestOptions<MissionsInput, MissionsResponse>) => {
		const { client } = useWunderGraph();
		return Query(client.query.Missions, { requiresAuthentication: false }, options);
	},
};

export const useLiveQuery = {
	Dragons: (options?: SubscriptionRequestOptions) => {
		const { client } = useWunderGraph();
		return Subscription(client.liveQuery.Dragons, { requiresAuthentication: false }, options);
	},
	Missions: (options: SubscriptionRequestOptions<MissionsInput>) => {
		const { client } = useWunderGraph();
		return Subscription(client.liveQuery.Missions, { requiresAuthentication: false }, options);
	},
};