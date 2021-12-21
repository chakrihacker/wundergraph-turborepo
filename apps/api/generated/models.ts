// Code generated by wunderctl. DO NOT EDIT.

export interface MissionsInput {
	find?: {
		id?: string;
		manufacturer?: string;
		name?: string;
		payload_id?: string;
	};
}

export interface InternalMissionsInput {
	find?: {
		id?: string;
		manufacturer?: string;
		name?: string;
		payload_id?: string;
	};
}

export interface InjectedMissionsInput {
	find?: {
		id?: string;
		manufacturer?: string;
		name?: string;
		payload_id?: string;
	};
}

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface DragonsResponse {
	data?: {
		spacex_dragons?: {
			name?: string;
			active?: boolean;
		}[];
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface MissionsResponse {
	data?: {
		spacex_missions?: {
			id?: string;
			name?: string;
			manufacturers?: string[];
		}[];
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface DragonsResponseData {
	spacex_dragons?: {
		name?: string;
		active?: boolean;
	}[];
}

export interface MissionsResponseData {
	spacex_missions?: {
		id?: string;
		name?: string;
		manufacturers?: string[];
	}[];
}
