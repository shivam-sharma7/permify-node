/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "base.v1";

export enum ErrorCode {
  ERROR_CODE_UNSPECIFIED = 0,
  /** ERROR_CODE_MISSING_BEARER_TOKEN - authn */
  ERROR_CODE_MISSING_BEARER_TOKEN = 1001,
  ERROR_CODE_UNAUTHENTICATED = 1002,
  ERROR_CODE_MISSING_TENANT_ID = 1003,
  ERROR_CODE_INVALID_AUDIENCE = 1004,
  ERROR_CODE_INVALID_CLAIMS = 1005,
  ERROR_CODE_INVALID_ISSUER = 1006,
  ERROR_CODE_INVALID_BEARER_TOKEN = 1007,
  /** ERROR_CODE_VALIDATION - validation */
  ERROR_CODE_VALIDATION = 2000,
  ERROR_CODE_UNDEFINED_CHILD_TYPE = 2002,
  ERROR_CODE_UNDEFINED_CHILD_KIND = 2003,
  ERROR_CODE_UNDEFINED_RELATION_REFERENCE = 2006,
  ERROR_CODE_NOT_SUPPORTED_RELATION_WALK = 2007,
  ERROR_CODE_ENTITY_AND_SUBJECT_CANNOT_BE_EQUAL = 2008,
  ERROR_CODE_DEPTH_NOT_ENOUGH = 2009,
  ERROR_CODE_RELATION_REFERENCE_NOT_FOUND_IN_ENTITY_REFERENCES = 2010,
  ERROR_CODE_RELATION_REFERENCE_MUST_HAVE_ONE_ENTITY_REFERENCE = 2011,
  ERROR_CODE_DUPLICATED_ENTITY_REFERENCE = 2012,
  ERROR_CODE_DUPLICATED_RELATION_REFERENCE = 2013,
  ERROR_CODE_DUPLICATED_PERMISSION_REFERENCE = 2014,
  ERROR_CODE_SCHEMA_PARSE = 2015,
  ERROR_CODE_SCHEMA_COMPILE = 2016,
  ERROR_CODE_SUBJECT_RELATION_MUST_BE_EMPTY = 2017,
  ERROR_CODE_SUBJECT_RELATION_CANNOT_BE_EMPTY = 2018,
  ERROR_CODE_SCHEMA_MUST_HAVE_USER_ENTITY_DEFINITION = 2019,
  ERROR_CODE_UNIQUE_CONSTRAINT = 2020,
  ERROR_CODE_INVALID_CONTINUOUS_TOKEN = 2021,
  ERROR_CODE_INVALID_KEY = 2022,
  ERROR_CODE_ENTITY_TYPE_REQUIRED = 2023,
  ERROR_CODE_NO_ENTITY_REFERENCES_FOUND_IN_SCHEMA = 2024,
  ERROR_CODE_INVALID_ARGUMENT = 2025,
  ERROR_CODE_INVALID_RULE_REFERENCE = 2026,
  ERROR_CODE_NOT_SUPPORTED_WALK = 2027,
  ERROR_CODE_MISSING_ARGUMENT = 2028,
  ERROR_CODE_ALREADY_EXIST = 2029,
  /** ERROR_CODE_NOT_FOUND - not found */
  ERROR_CODE_NOT_FOUND = 4000,
  ERROR_CODE_ENTITY_TYPE_NOT_FOUND = 4001,
  ERROR_CODE_PERMISSION_NOT_FOUND = 4002,
  ERROR_CODE_SCHEMA_NOT_FOUND = 4003,
  ERROR_CODE_SUBJECT_TYPE_NOT_FOUND = 4004,
  ERROR_CODE_ENTITY_DEFINITION_NOT_FOUND = 4005,
  ERROR_CODE_PERMISSION_DEFINITION_NOT_FOUND = 4006,
  ERROR_CODE_RELATION_DEFINITION_NOT_FOUND = 4007,
  ERROR_CODE_RECORD_NOT_FOUND = 4008,
  ERROR_CODE_TENANT_NOT_FOUND = 4009,
  ERROR_CODE_ATTRIBUTE_DEFINITION_NOT_FOUND = 4010,
  ERROR_CODE_ATTRIBUTE_TYPE_MISMATCH = 4011,
  ERROR_CODE_BUNDLE_NOT_FOUND = 4012,
  ERROR_CODE_RULE_DEFINITION_NOT_FOUND = 4013,
  /** ERROR_CODE_INTERNAL - internal */
  ERROR_CODE_INTERNAL = 5000,
  ERROR_CODE_CANCELLED = 5001,
  ERROR_CODE_SQL_BUILDER = 5002,
  ERROR_CODE_CIRCUIT_BREAKER = 5003,
  ERROR_CODE_EXECUTION = 5005,
  ERROR_CODE_SCAN = 5006,
  ERROR_CODE_MIGRATION = 5007,
  ERROR_CODE_TYPE_CONVERSATION = 5008,
  ERROR_CODE_ERROR_MAX_RETRIES = 5009,
  ERROR_CODE_ROLLBACK = 5010,
  ERROR_CODE_EXCLUSION_REQUIRES_MORE_THAN_ONE_FUNCTION = 5011,
  ERROR_CODE_NOT_IMPLEMENTED = 5012,
  ERROR_CODE_DATASTORE = 5013,
  UNRECOGNIZED = -1,
}

export function errorCodeFromJSON(object: any): ErrorCode {
  switch (object) {
    case 0:
    case "ERROR_CODE_UNSPECIFIED":
      return ErrorCode.ERROR_CODE_UNSPECIFIED;
    case 1001:
    case "ERROR_CODE_MISSING_BEARER_TOKEN":
      return ErrorCode.ERROR_CODE_MISSING_BEARER_TOKEN;
    case 1002:
    case "ERROR_CODE_UNAUTHENTICATED":
      return ErrorCode.ERROR_CODE_UNAUTHENTICATED;
    case 1003:
    case "ERROR_CODE_MISSING_TENANT_ID":
      return ErrorCode.ERROR_CODE_MISSING_TENANT_ID;
    case 1004:
    case "ERROR_CODE_INVALID_AUDIENCE":
      return ErrorCode.ERROR_CODE_INVALID_AUDIENCE;
    case 1005:
    case "ERROR_CODE_INVALID_CLAIMS":
      return ErrorCode.ERROR_CODE_INVALID_CLAIMS;
    case 1006:
    case "ERROR_CODE_INVALID_ISSUER":
      return ErrorCode.ERROR_CODE_INVALID_ISSUER;
    case 1007:
    case "ERROR_CODE_INVALID_BEARER_TOKEN":
      return ErrorCode.ERROR_CODE_INVALID_BEARER_TOKEN;
    case 2000:
    case "ERROR_CODE_VALIDATION":
      return ErrorCode.ERROR_CODE_VALIDATION;
    case 2002:
    case "ERROR_CODE_UNDEFINED_CHILD_TYPE":
      return ErrorCode.ERROR_CODE_UNDEFINED_CHILD_TYPE;
    case 2003:
    case "ERROR_CODE_UNDEFINED_CHILD_KIND":
      return ErrorCode.ERROR_CODE_UNDEFINED_CHILD_KIND;
    case 2006:
    case "ERROR_CODE_UNDEFINED_RELATION_REFERENCE":
      return ErrorCode.ERROR_CODE_UNDEFINED_RELATION_REFERENCE;
    case 2007:
    case "ERROR_CODE_NOT_SUPPORTED_RELATION_WALK":
      return ErrorCode.ERROR_CODE_NOT_SUPPORTED_RELATION_WALK;
    case 2008:
    case "ERROR_CODE_ENTITY_AND_SUBJECT_CANNOT_BE_EQUAL":
      return ErrorCode.ERROR_CODE_ENTITY_AND_SUBJECT_CANNOT_BE_EQUAL;
    case 2009:
    case "ERROR_CODE_DEPTH_NOT_ENOUGH":
      return ErrorCode.ERROR_CODE_DEPTH_NOT_ENOUGH;
    case 2010:
    case "ERROR_CODE_RELATION_REFERENCE_NOT_FOUND_IN_ENTITY_REFERENCES":
      return ErrorCode.ERROR_CODE_RELATION_REFERENCE_NOT_FOUND_IN_ENTITY_REFERENCES;
    case 2011:
    case "ERROR_CODE_RELATION_REFERENCE_MUST_HAVE_ONE_ENTITY_REFERENCE":
      return ErrorCode.ERROR_CODE_RELATION_REFERENCE_MUST_HAVE_ONE_ENTITY_REFERENCE;
    case 2012:
    case "ERROR_CODE_DUPLICATED_ENTITY_REFERENCE":
      return ErrorCode.ERROR_CODE_DUPLICATED_ENTITY_REFERENCE;
    case 2013:
    case "ERROR_CODE_DUPLICATED_RELATION_REFERENCE":
      return ErrorCode.ERROR_CODE_DUPLICATED_RELATION_REFERENCE;
    case 2014:
    case "ERROR_CODE_DUPLICATED_PERMISSION_REFERENCE":
      return ErrorCode.ERROR_CODE_DUPLICATED_PERMISSION_REFERENCE;
    case 2015:
    case "ERROR_CODE_SCHEMA_PARSE":
      return ErrorCode.ERROR_CODE_SCHEMA_PARSE;
    case 2016:
    case "ERROR_CODE_SCHEMA_COMPILE":
      return ErrorCode.ERROR_CODE_SCHEMA_COMPILE;
    case 2017:
    case "ERROR_CODE_SUBJECT_RELATION_MUST_BE_EMPTY":
      return ErrorCode.ERROR_CODE_SUBJECT_RELATION_MUST_BE_EMPTY;
    case 2018:
    case "ERROR_CODE_SUBJECT_RELATION_CANNOT_BE_EMPTY":
      return ErrorCode.ERROR_CODE_SUBJECT_RELATION_CANNOT_BE_EMPTY;
    case 2019:
    case "ERROR_CODE_SCHEMA_MUST_HAVE_USER_ENTITY_DEFINITION":
      return ErrorCode.ERROR_CODE_SCHEMA_MUST_HAVE_USER_ENTITY_DEFINITION;
    case 2020:
    case "ERROR_CODE_UNIQUE_CONSTRAINT":
      return ErrorCode.ERROR_CODE_UNIQUE_CONSTRAINT;
    case 2021:
    case "ERROR_CODE_INVALID_CONTINUOUS_TOKEN":
      return ErrorCode.ERROR_CODE_INVALID_CONTINUOUS_TOKEN;
    case 2022:
    case "ERROR_CODE_INVALID_KEY":
      return ErrorCode.ERROR_CODE_INVALID_KEY;
    case 2023:
    case "ERROR_CODE_ENTITY_TYPE_REQUIRED":
      return ErrorCode.ERROR_CODE_ENTITY_TYPE_REQUIRED;
    case 2024:
    case "ERROR_CODE_NO_ENTITY_REFERENCES_FOUND_IN_SCHEMA":
      return ErrorCode.ERROR_CODE_NO_ENTITY_REFERENCES_FOUND_IN_SCHEMA;
    case 2025:
    case "ERROR_CODE_INVALID_ARGUMENT":
      return ErrorCode.ERROR_CODE_INVALID_ARGUMENT;
    case 2026:
    case "ERROR_CODE_INVALID_RULE_REFERENCE":
      return ErrorCode.ERROR_CODE_INVALID_RULE_REFERENCE;
    case 2027:
    case "ERROR_CODE_NOT_SUPPORTED_WALK":
      return ErrorCode.ERROR_CODE_NOT_SUPPORTED_WALK;
    case 2028:
    case "ERROR_CODE_MISSING_ARGUMENT":
      return ErrorCode.ERROR_CODE_MISSING_ARGUMENT;
    case 2029:
    case "ERROR_CODE_ALREADY_EXIST":
      return ErrorCode.ERROR_CODE_ALREADY_EXIST;
    case 4000:
    case "ERROR_CODE_NOT_FOUND":
      return ErrorCode.ERROR_CODE_NOT_FOUND;
    case 4001:
    case "ERROR_CODE_ENTITY_TYPE_NOT_FOUND":
      return ErrorCode.ERROR_CODE_ENTITY_TYPE_NOT_FOUND;
    case 4002:
    case "ERROR_CODE_PERMISSION_NOT_FOUND":
      return ErrorCode.ERROR_CODE_PERMISSION_NOT_FOUND;
    case 4003:
    case "ERROR_CODE_SCHEMA_NOT_FOUND":
      return ErrorCode.ERROR_CODE_SCHEMA_NOT_FOUND;
    case 4004:
    case "ERROR_CODE_SUBJECT_TYPE_NOT_FOUND":
      return ErrorCode.ERROR_CODE_SUBJECT_TYPE_NOT_FOUND;
    case 4005:
    case "ERROR_CODE_ENTITY_DEFINITION_NOT_FOUND":
      return ErrorCode.ERROR_CODE_ENTITY_DEFINITION_NOT_FOUND;
    case 4006:
    case "ERROR_CODE_PERMISSION_DEFINITION_NOT_FOUND":
      return ErrorCode.ERROR_CODE_PERMISSION_DEFINITION_NOT_FOUND;
    case 4007:
    case "ERROR_CODE_RELATION_DEFINITION_NOT_FOUND":
      return ErrorCode.ERROR_CODE_RELATION_DEFINITION_NOT_FOUND;
    case 4008:
    case "ERROR_CODE_RECORD_NOT_FOUND":
      return ErrorCode.ERROR_CODE_RECORD_NOT_FOUND;
    case 4009:
    case "ERROR_CODE_TENANT_NOT_FOUND":
      return ErrorCode.ERROR_CODE_TENANT_NOT_FOUND;
    case 4010:
    case "ERROR_CODE_ATTRIBUTE_DEFINITION_NOT_FOUND":
      return ErrorCode.ERROR_CODE_ATTRIBUTE_DEFINITION_NOT_FOUND;
    case 4011:
    case "ERROR_CODE_ATTRIBUTE_TYPE_MISMATCH":
      return ErrorCode.ERROR_CODE_ATTRIBUTE_TYPE_MISMATCH;
    case 4012:
    case "ERROR_CODE_BUNDLE_NOT_FOUND":
      return ErrorCode.ERROR_CODE_BUNDLE_NOT_FOUND;
    case 4013:
    case "ERROR_CODE_RULE_DEFINITION_NOT_FOUND":
      return ErrorCode.ERROR_CODE_RULE_DEFINITION_NOT_FOUND;
    case 5000:
    case "ERROR_CODE_INTERNAL":
      return ErrorCode.ERROR_CODE_INTERNAL;
    case 5001:
    case "ERROR_CODE_CANCELLED":
      return ErrorCode.ERROR_CODE_CANCELLED;
    case 5002:
    case "ERROR_CODE_SQL_BUILDER":
      return ErrorCode.ERROR_CODE_SQL_BUILDER;
    case 5003:
    case "ERROR_CODE_CIRCUIT_BREAKER":
      return ErrorCode.ERROR_CODE_CIRCUIT_BREAKER;
    case 5005:
    case "ERROR_CODE_EXECUTION":
      return ErrorCode.ERROR_CODE_EXECUTION;
    case 5006:
    case "ERROR_CODE_SCAN":
      return ErrorCode.ERROR_CODE_SCAN;
    case 5007:
    case "ERROR_CODE_MIGRATION":
      return ErrorCode.ERROR_CODE_MIGRATION;
    case 5008:
    case "ERROR_CODE_TYPE_CONVERSATION":
      return ErrorCode.ERROR_CODE_TYPE_CONVERSATION;
    case 5009:
    case "ERROR_CODE_ERROR_MAX_RETRIES":
      return ErrorCode.ERROR_CODE_ERROR_MAX_RETRIES;
    case 5010:
    case "ERROR_CODE_ROLLBACK":
      return ErrorCode.ERROR_CODE_ROLLBACK;
    case 5011:
    case "ERROR_CODE_EXCLUSION_REQUIRES_MORE_THAN_ONE_FUNCTION":
      return ErrorCode.ERROR_CODE_EXCLUSION_REQUIRES_MORE_THAN_ONE_FUNCTION;
    case 5012:
    case "ERROR_CODE_NOT_IMPLEMENTED":
      return ErrorCode.ERROR_CODE_NOT_IMPLEMENTED;
    case 5013:
    case "ERROR_CODE_DATASTORE":
      return ErrorCode.ERROR_CODE_DATASTORE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorCode.UNRECOGNIZED;
  }
}

export function errorCodeToJSON(object: ErrorCode): string {
  switch (object) {
    case ErrorCode.ERROR_CODE_UNSPECIFIED:
      return "ERROR_CODE_UNSPECIFIED";
    case ErrorCode.ERROR_CODE_MISSING_BEARER_TOKEN:
      return "ERROR_CODE_MISSING_BEARER_TOKEN";
    case ErrorCode.ERROR_CODE_UNAUTHENTICATED:
      return "ERROR_CODE_UNAUTHENTICATED";
    case ErrorCode.ERROR_CODE_MISSING_TENANT_ID:
      return "ERROR_CODE_MISSING_TENANT_ID";
    case ErrorCode.ERROR_CODE_INVALID_AUDIENCE:
      return "ERROR_CODE_INVALID_AUDIENCE";
    case ErrorCode.ERROR_CODE_INVALID_CLAIMS:
      return "ERROR_CODE_INVALID_CLAIMS";
    case ErrorCode.ERROR_CODE_INVALID_ISSUER:
      return "ERROR_CODE_INVALID_ISSUER";
    case ErrorCode.ERROR_CODE_INVALID_BEARER_TOKEN:
      return "ERROR_CODE_INVALID_BEARER_TOKEN";
    case ErrorCode.ERROR_CODE_VALIDATION:
      return "ERROR_CODE_VALIDATION";
    case ErrorCode.ERROR_CODE_UNDEFINED_CHILD_TYPE:
      return "ERROR_CODE_UNDEFINED_CHILD_TYPE";
    case ErrorCode.ERROR_CODE_UNDEFINED_CHILD_KIND:
      return "ERROR_CODE_UNDEFINED_CHILD_KIND";
    case ErrorCode.ERROR_CODE_UNDEFINED_RELATION_REFERENCE:
      return "ERROR_CODE_UNDEFINED_RELATION_REFERENCE";
    case ErrorCode.ERROR_CODE_NOT_SUPPORTED_RELATION_WALK:
      return "ERROR_CODE_NOT_SUPPORTED_RELATION_WALK";
    case ErrorCode.ERROR_CODE_ENTITY_AND_SUBJECT_CANNOT_BE_EQUAL:
      return "ERROR_CODE_ENTITY_AND_SUBJECT_CANNOT_BE_EQUAL";
    case ErrorCode.ERROR_CODE_DEPTH_NOT_ENOUGH:
      return "ERROR_CODE_DEPTH_NOT_ENOUGH";
    case ErrorCode.ERROR_CODE_RELATION_REFERENCE_NOT_FOUND_IN_ENTITY_REFERENCES:
      return "ERROR_CODE_RELATION_REFERENCE_NOT_FOUND_IN_ENTITY_REFERENCES";
    case ErrorCode.ERROR_CODE_RELATION_REFERENCE_MUST_HAVE_ONE_ENTITY_REFERENCE:
      return "ERROR_CODE_RELATION_REFERENCE_MUST_HAVE_ONE_ENTITY_REFERENCE";
    case ErrorCode.ERROR_CODE_DUPLICATED_ENTITY_REFERENCE:
      return "ERROR_CODE_DUPLICATED_ENTITY_REFERENCE";
    case ErrorCode.ERROR_CODE_DUPLICATED_RELATION_REFERENCE:
      return "ERROR_CODE_DUPLICATED_RELATION_REFERENCE";
    case ErrorCode.ERROR_CODE_DUPLICATED_PERMISSION_REFERENCE:
      return "ERROR_CODE_DUPLICATED_PERMISSION_REFERENCE";
    case ErrorCode.ERROR_CODE_SCHEMA_PARSE:
      return "ERROR_CODE_SCHEMA_PARSE";
    case ErrorCode.ERROR_CODE_SCHEMA_COMPILE:
      return "ERROR_CODE_SCHEMA_COMPILE";
    case ErrorCode.ERROR_CODE_SUBJECT_RELATION_MUST_BE_EMPTY:
      return "ERROR_CODE_SUBJECT_RELATION_MUST_BE_EMPTY";
    case ErrorCode.ERROR_CODE_SUBJECT_RELATION_CANNOT_BE_EMPTY:
      return "ERROR_CODE_SUBJECT_RELATION_CANNOT_BE_EMPTY";
    case ErrorCode.ERROR_CODE_SCHEMA_MUST_HAVE_USER_ENTITY_DEFINITION:
      return "ERROR_CODE_SCHEMA_MUST_HAVE_USER_ENTITY_DEFINITION";
    case ErrorCode.ERROR_CODE_UNIQUE_CONSTRAINT:
      return "ERROR_CODE_UNIQUE_CONSTRAINT";
    case ErrorCode.ERROR_CODE_INVALID_CONTINUOUS_TOKEN:
      return "ERROR_CODE_INVALID_CONTINUOUS_TOKEN";
    case ErrorCode.ERROR_CODE_INVALID_KEY:
      return "ERROR_CODE_INVALID_KEY";
    case ErrorCode.ERROR_CODE_ENTITY_TYPE_REQUIRED:
      return "ERROR_CODE_ENTITY_TYPE_REQUIRED";
    case ErrorCode.ERROR_CODE_NO_ENTITY_REFERENCES_FOUND_IN_SCHEMA:
      return "ERROR_CODE_NO_ENTITY_REFERENCES_FOUND_IN_SCHEMA";
    case ErrorCode.ERROR_CODE_INVALID_ARGUMENT:
      return "ERROR_CODE_INVALID_ARGUMENT";
    case ErrorCode.ERROR_CODE_INVALID_RULE_REFERENCE:
      return "ERROR_CODE_INVALID_RULE_REFERENCE";
    case ErrorCode.ERROR_CODE_NOT_SUPPORTED_WALK:
      return "ERROR_CODE_NOT_SUPPORTED_WALK";
    case ErrorCode.ERROR_CODE_MISSING_ARGUMENT:
      return "ERROR_CODE_MISSING_ARGUMENT";
    case ErrorCode.ERROR_CODE_ALREADY_EXIST:
      return "ERROR_CODE_ALREADY_EXIST";
    case ErrorCode.ERROR_CODE_NOT_FOUND:
      return "ERROR_CODE_NOT_FOUND";
    case ErrorCode.ERROR_CODE_ENTITY_TYPE_NOT_FOUND:
      return "ERROR_CODE_ENTITY_TYPE_NOT_FOUND";
    case ErrorCode.ERROR_CODE_PERMISSION_NOT_FOUND:
      return "ERROR_CODE_PERMISSION_NOT_FOUND";
    case ErrorCode.ERROR_CODE_SCHEMA_NOT_FOUND:
      return "ERROR_CODE_SCHEMA_NOT_FOUND";
    case ErrorCode.ERROR_CODE_SUBJECT_TYPE_NOT_FOUND:
      return "ERROR_CODE_SUBJECT_TYPE_NOT_FOUND";
    case ErrorCode.ERROR_CODE_ENTITY_DEFINITION_NOT_FOUND:
      return "ERROR_CODE_ENTITY_DEFINITION_NOT_FOUND";
    case ErrorCode.ERROR_CODE_PERMISSION_DEFINITION_NOT_FOUND:
      return "ERROR_CODE_PERMISSION_DEFINITION_NOT_FOUND";
    case ErrorCode.ERROR_CODE_RELATION_DEFINITION_NOT_FOUND:
      return "ERROR_CODE_RELATION_DEFINITION_NOT_FOUND";
    case ErrorCode.ERROR_CODE_RECORD_NOT_FOUND:
      return "ERROR_CODE_RECORD_NOT_FOUND";
    case ErrorCode.ERROR_CODE_TENANT_NOT_FOUND:
      return "ERROR_CODE_TENANT_NOT_FOUND";
    case ErrorCode.ERROR_CODE_ATTRIBUTE_DEFINITION_NOT_FOUND:
      return "ERROR_CODE_ATTRIBUTE_DEFINITION_NOT_FOUND";
    case ErrorCode.ERROR_CODE_ATTRIBUTE_TYPE_MISMATCH:
      return "ERROR_CODE_ATTRIBUTE_TYPE_MISMATCH";
    case ErrorCode.ERROR_CODE_BUNDLE_NOT_FOUND:
      return "ERROR_CODE_BUNDLE_NOT_FOUND";
    case ErrorCode.ERROR_CODE_RULE_DEFINITION_NOT_FOUND:
      return "ERROR_CODE_RULE_DEFINITION_NOT_FOUND";
    case ErrorCode.ERROR_CODE_INTERNAL:
      return "ERROR_CODE_INTERNAL";
    case ErrorCode.ERROR_CODE_CANCELLED:
      return "ERROR_CODE_CANCELLED";
    case ErrorCode.ERROR_CODE_SQL_BUILDER:
      return "ERROR_CODE_SQL_BUILDER";
    case ErrorCode.ERROR_CODE_CIRCUIT_BREAKER:
      return "ERROR_CODE_CIRCUIT_BREAKER";
    case ErrorCode.ERROR_CODE_EXECUTION:
      return "ERROR_CODE_EXECUTION";
    case ErrorCode.ERROR_CODE_SCAN:
      return "ERROR_CODE_SCAN";
    case ErrorCode.ERROR_CODE_MIGRATION:
      return "ERROR_CODE_MIGRATION";
    case ErrorCode.ERROR_CODE_TYPE_CONVERSATION:
      return "ERROR_CODE_TYPE_CONVERSATION";
    case ErrorCode.ERROR_CODE_ERROR_MAX_RETRIES:
      return "ERROR_CODE_ERROR_MAX_RETRIES";
    case ErrorCode.ERROR_CODE_ROLLBACK:
      return "ERROR_CODE_ROLLBACK";
    case ErrorCode.ERROR_CODE_EXCLUSION_REQUIRES_MORE_THAN_ONE_FUNCTION:
      return "ERROR_CODE_EXCLUSION_REQUIRES_MORE_THAN_ONE_FUNCTION";
    case ErrorCode.ERROR_CODE_NOT_IMPLEMENTED:
      return "ERROR_CODE_NOT_IMPLEMENTED";
    case ErrorCode.ERROR_CODE_DATASTORE:
      return "ERROR_CODE_DATASTORE";
    case ErrorCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ErrorResponse */
export interface ErrorResponse {
  code: ErrorCode;
  message: string;
}

function createBaseErrorResponse(): ErrorResponse {
  return { code: 0, message: "" };
}

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ErrorResponse {
    return {
      code: isSet(object.code) ? errorCodeFromJSON(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = errorCodeToJSON(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create(base?: DeepPartial<ErrorResponse>): ErrorResponse {
    return ErrorResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ErrorResponse>): ErrorResponse {
    const message = createBaseErrorResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
