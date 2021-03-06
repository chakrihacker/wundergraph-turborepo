// Code generated by wunderctl. DO NOT EDIT.

export interface LinkDefinition {
	targetType: string;
	targetFieldName: string;
	sourceField: string;
	argumentSources: LinkFieldArgumentSourceDefinition[];
}

export interface LinkFieldArgumentSourceDefinition {
	name: string;
	type: "objectField" | "fieldArgument";
	path: string[];
}

class LinkBuilder<T, R extends {} = {}, TT = {}> {
	// @ts-ignore
	constructor(current: R = {}, sourceField: string, targetType: string, targetField: string) {
		this.current = current;
		this.sourceField = sourceField;
		this.targetType = targetType;
		this.targetField = targetField;
	}

	private readonly sourceField: string;
	private readonly targetType: string;
	private readonly targetField: string;

	// @ts-ignore
	private current: R = {};

	argument<P extends Exclude<keyof T, keyof R>, V extends T[P], S extends "fieldArgument" | "objectField">(
		key: P,
		source: S,
		value: S extends "fieldArgument" ? string : TT,
		...extraPath: string[]
	) {
		const extra: {} = { [key]: { source, path: [value, ...extraPath] } };

		const instance = {
			...(this.current as object),
			...extra,
		} as R & Pick<T, P>;

		return new LinkBuilder<T, R & Pick<T, P>, TT>(instance, this.sourceField, this.targetType, this.targetField);
	}

	build = (): LinkDefinition => {
		const args = this.current as { [key: string]: { path: string[]; source: "fieldArgument" | "objectField" } };
		return {
			argumentSources: Object.keys(args).map((key) => ({
				name: key,
				type: args[key].source,
				path: args[key].path,
			})),
			targetType: this.targetType,
			sourceField: this.sourceField,
			targetFieldName: this.targetField,
		};
	};
}

export const sourceStep = <T extends {}, R extends {}>() => ({
	source: <F extends keyof T>(field: F) => {
		return targetStep<T, F, R>(field);
	},
});

const targetStep = <T, F extends keyof T, R>(field: F) => ({
	target: <r extends keyof R>(targetType: r, targetField: string) => {
		return new LinkBuilder<T[F], {}, R[r]>({}, field as string, targetType as string, targetField);
	},
});

interface TargetTypes {
	spacex_users: "id" | "name" | "rocket" | "timestamp" | "twitter";
	spacex_users_aggregate: "aggregate" | "nodes";
	spacex_users_aggregate_fields: "count" | "max" | "min";
	spacex_users_max_fields: "name" | "rocket" | "timestamp" | "twitter";
	spacex_users_min_fields: "name" | "rocket" | "timestamp" | "twitter";
	spacex_Capsule: "id" | "landings" | "missions" | "original_launch" | "reuse_count" | "status" | "type" | "dragon";
	spacex_CapsuleMission: "flight" | "name";
	spacex_Dragon:
		| "active"
		| "crew_capacity"
		| "description"
		| "diameter"
		| "dry_mass_kg"
		| "dry_mass_lb"
		| "first_flight"
		| "heat_shield"
		| "height_w_trunk"
		| "id"
		| "launch_payload_mass"
		| "launch_payload_vol"
		| "name"
		| "orbit_duration_yr"
		| "pressurized_capsule"
		| "return_payload_mass"
		| "return_payload_vol"
		| "sidewall_angle_deg"
		| "thrusters"
		| "trunk"
		| "type"
		| "wikipedia";
	spacex_Distance: "feet" | "meters";
	spacex_DragonHeatShield: "dev_partner" | "material" | "size_meters" | "temp_degrees";
	spacex_Mass: "kg" | "lb";
	spacex_Volume: "cubic_feet" | "cubic_meters";
	spacex_DragonPressurizedCapsule: "payload_volume";
	spacex_DragonThrust: "amount" | "fuel_1" | "fuel_2" | "pods" | "thrust" | "type";
	spacex_Force: "kN" | "lbf";
	spacex_DragonTrunk: "cargo" | "trunk_volume";
	spacex_DragonTrunkCargo: "solar_array" | "unpressurized_cargo";
	spacex_Info:
		| "ceo"
		| "coo"
		| "cto_propulsion"
		| "cto"
		| "employees"
		| "founded"
		| "founder"
		| "headquarters"
		| "launch_sites"
		| "links"
		| "name"
		| "summary"
		| "test_sites"
		| "valuation"
		| "vehicles";
	spacex_Address: "address" | "city" | "state";
	spacex_InfoLinks: "elon_twitter" | "flickr" | "twitter" | "website";
	spacex_Core:
		| "asds_attempts"
		| "asds_landings"
		| "block"
		| "id"
		| "missions"
		| "original_launch"
		| "reuse_count"
		| "rtls_attempts"
		| "rtls_landings"
		| "status"
		| "water_landing";
	spacex_History: "details" | "event_date_unix" | "event_date_utc" | "id" | "links" | "title" | "flight";
	spacex_Link: "article" | "reddit" | "wikipedia";
	spacex_Launch:
		| "details"
		| "id"
		| "is_tentative"
		| "launch_date_local"
		| "launch_date_unix"
		| "launch_date_utc"
		| "launch_site"
		| "launch_success"
		| "launch_year"
		| "links"
		| "mission_id"
		| "mission_name"
		| "rocket"
		| "static_fire_date_unix"
		| "static_fire_date_utc"
		| "telemetry"
		| "tentative_max_precision"
		| "upcoming"
		| "ships";
	spacex_LaunchSite: "site_id" | "site_name_long" | "site_name";
	spacex_LaunchLinks:
		| "article_link"
		| "flickr_images"
		| "mission_patch_small"
		| "mission_patch"
		| "presskit"
		| "reddit_campaign"
		| "reddit_launch"
		| "reddit_media"
		| "reddit_recovery"
		| "video_link"
		| "wikipedia";
	spacex_LaunchRocket: "fairings" | "first_stage" | "rocket_name" | "rocket_type" | "rocket" | "second_stage";
	spacex_LaunchRocketFairings: "recovered" | "recovery_attempt" | "reused" | "ship";
	spacex_LaunchRocketFirstStage: "cores";
	spacex_LaunchRocketFirstStageCore:
		| "block"
		| "core"
		| "flight"
		| "gridfins"
		| "land_success"
		| "landing_intent"
		| "landing_type"
		| "landing_vehicle"
		| "legs"
		| "reused";
	spacex_Rocket:
		| "active"
		| "boosters"
		| "company"
		| "cost_per_launch"
		| "country"
		| "description"
		| "diameter"
		| "engines"
		| "first_flight"
		| "first_stage"
		| "height"
		| "id"
		| "landing_legs"
		| "mass"
		| "name"
		| "payload_weights"
		| "second_stage"
		| "stages"
		| "success_rate_pct"
		| "type"
		| "wikipedia";
	spacex_RocketEngines:
		| "number"
		| "type"
		| "version"
		| "layout"
		| "engine_loss_max"
		| "propellant_1"
		| "propellant_2"
		| "thrust_sea_level"
		| "thrust_vacuum"
		| "thrust_to_weight";
	spacex_RocketFirstStage:
		| "burn_time_sec"
		| "engines"
		| "fuel_amount_tons"
		| "reusable"
		| "thrust_sea_level"
		| "thrust_vacuum";
	spacex_RocketLandingLegs: "number" | "material";
	spacex_RocketPayloadWeight: "id" | "kg" | "lb" | "name";
	spacex_RocketSecondStage: "burn_time_sec" | "engines" | "fuel_amount_tons" | "payloads" | "thrust";
	spacex_RocketSecondStagePayloads: "option_1" | "composite_fairing";
	spacex_RocketSecondStagePayloadCompositeFairing: "height" | "diameter";
	spacex_LaunchRocketSecondStage: "block" | "payloads";
	spacex_Payload:
		| "customers"
		| "id"
		| "manufacturer"
		| "nationality"
		| "norad_id"
		| "orbit_params"
		| "orbit"
		| "payload_mass_kg"
		| "payload_mass_lbs"
		| "payload_type"
		| "reused";
	spacex_PayloadOrbitParams:
		| "apoapsis_km"
		| "arg_of_pericenter"
		| "eccentricity"
		| "epoch"
		| "inclination_deg"
		| "lifespan_years"
		| "longitude"
		| "mean_anomaly"
		| "mean_motion"
		| "periapsis_km"
		| "period_min"
		| "raan"
		| "reference_system"
		| "regime"
		| "semi_major_axis_km";
	spacex_LaunchTelemetry: "flight_club";
	spacex_Ship:
		| "abs"
		| "active"
		| "attempted_landings"
		| "class"
		| "course_deg"
		| "home_port"
		| "id"
		| "image"
		| "imo"
		| "missions"
		| "mmsi"
		| "model"
		| "name"
		| "position"
		| "roles"
		| "speed_kn"
		| "status"
		| "successful_landings"
		| "type"
		| "url"
		| "weight_kg"
		| "weight_lbs"
		| "year_built";
	spacex_ShipMission: "flight" | "name";
	spacex_ShipLocation: "latitude" | "longitude";
	spacex_HistoriesResult: "result" | "data";
	spacex_Result: "totalCount";
	spacex_Landpad:
		| "attempted_landings"
		| "details"
		| "full_name"
		| "id"
		| "landing_type"
		| "location"
		| "status"
		| "successful_landings"
		| "wikipedia";
	spacex_Location: "latitude" | "longitude" | "name" | "region";
	spacex_LaunchesPastResult: "result" | "data";
	spacex_Launchpad:
		| "attempted_launches"
		| "details"
		| "id"
		| "location"
		| "name"
		| "status"
		| "successful_launches"
		| "vehicles_launched"
		| "wikipedia";
	spacex_Mission: "description" | "id" | "manufacturers" | "name" | "twitter" | "website" | "wikipedia" | "payloads";
	spacex_MissionResult: "result" | "data";
	spacex_Roadster:
		| "apoapsis_au"
		| "details"
		| "earth_distance_km"
		| "earth_distance_mi"
		| "eccentricity"
		| "epoch_jd"
		| "inclination"
		| "launch_date_unix"
		| "launch_date_utc"
		| "launch_mass_kg"
		| "launch_mass_lbs"
		| "longitude"
		| "mars_distance_km"
		| "mars_distance_mi"
		| "name"
		| "norad_id"
		| "orbit_type"
		| "periapsis_arg"
		| "periapsis_au"
		| "period_days"
		| "semi_major_axis_au"
		| "speed_kph"
		| "speed_mph"
		| "wikipedia";
	spacex_RocketsResult: "result" | "data";
	spacex_ShipsResult: "result" | "data";
	spacex_users_mutation_response: "affected_rows" | "returning";
	spacex_CoreMission: "name" | "flight";
}

interface SourceFields {
	spacex_users: {
		distinct_on: null;
		limit: null;
		offset: null;
		order_by: null;
		where: null;
	};
	spacex_users_aggregate: {
		distinct_on: null;
		limit: null;
		offset: null;
		order_by: null;
		where: null;
	};
	spacex_users_by_pk: {
		id: null;
	};
	spacex_capsules: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_capsulesPast: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_capsulesUpcoming: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_capsule: {
		id: null;
	};
	spacex_company: {};
	spacex_cores: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_coresPast: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_coresUpcoming: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_core: {
		id: null;
	};
	spacex_dragons: {
		limit: null;
		offset: null;
	};
	spacex_dragon: {
		id: null;
	};
	spacex_histories: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_historiesResult: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_history: {
		id: null;
	};
	spacex_landpads: {
		limit: null;
		offset: null;
	};
	spacex_landpad: {
		id: null;
	};
	spacex_launches: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launchesPast: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launchesPastResult: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launchesUpcoming: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launch: {
		id: null;
	};
	spacex_launchLatest: {
		offset: null;
	};
	spacex_launchNext: {
		offset: null;
	};
	spacex_launchpads: {
		limit: null;
		offset: null;
	};
	spacex_launchpad: {
		id: null;
	};
	spacex_missions: {
		find: null;
		limit: null;
		offset: null;
	};
	spacex_missionsResult: {
		find: null;
		limit: null;
		offset: null;
	};
	spacex_mission: {
		id: null;
	};
	spacex_payloads: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_payload: {
		id: null;
	};
	spacex_roadster: {};
	spacex_rockets: {
		limit: null;
		offset: null;
	};
	spacex_rocketsResult: {
		limit: null;
		offset: null;
	};
	spacex_rocket: {
		id: null;
	};
	spacex_ships: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_shipsResult: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_ship: {
		id: null;
	};
}

const linkBuilder = sourceStep<SourceFields, TargetTypes>();
export default linkBuilder;
