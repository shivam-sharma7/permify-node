/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../protobuf/empty";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Constant, Expr, SourceInfo } from "./syntax";

export const protobufPackage = "google.api.expr.v1alpha1";

/** A CEL expression which has been successfully type checked. */
export interface CheckedExpr {
  /**
   * A map from expression ids to resolved references.
   *
   * The following entries are in this table:
   *
   * - An Ident or Select expression is represented here if it resolves to a
   *   declaration. For instance, if `a.b.c` is represented by
   *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
   *   while `c` is a field selection, then the reference is attached to the
   *   nested select expression (but not to the id or or the outer select).
   *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
   *   the reference is attached to the ident expression.
   * - Every Call expression has an entry here, identifying the function being
   *   called.
   * - Every CreateStruct expression for a message has an entry, identifying
   *   the message.
   */
  referenceMap: Map<Long, Reference>;
  /**
   * A map from expression ids to types.
   *
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  typeMap: Map<Long, Type>;
  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  sourceInfo:
    | SourceInfo
    | undefined;
  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   *
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  exprVersion: string;
  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr: Expr | undefined;
}

export interface CheckedExpr_ReferenceMapEntry {
  key: Long;
  value: Reference | undefined;
}

export interface CheckedExpr_TypeMapEntry {
  key: Long;
  value: Type | undefined;
}

/** Represents a CEL type. */
export interface Type {
  typeKind?:
    | { $case: "dyn"; dyn: Empty }
    | { $case: "null"; null: NullValue }
    | { $case: "primitive"; primitive: Type_PrimitiveType }
    | { $case: "wrapper"; wrapper: Type_PrimitiveType }
    | { $case: "wellKnown"; wellKnown: Type_WellKnownType }
    | { $case: "listType"; listType: Type_ListType }
    | { $case: "mapType"; mapType: Type_MapType }
    | { $case: "function"; function: Type_FunctionType }
    | { $case: "messageType"; messageType: string }
    | { $case: "typeParam"; typeParam: string }
    | { $case: "type"; type: Type }
    | { $case: "error"; error: Empty }
    | { $case: "abstractType"; abstractType: Type_AbstractType }
    | undefined;
}

/** CEL primitive types. */
export enum Type_PrimitiveType {
  /** PRIMITIVE_TYPE_UNSPECIFIED - Unspecified type. */
  PRIMITIVE_TYPE_UNSPECIFIED = 0,
  /** BOOL - Boolean type. */
  BOOL = 1,
  /**
   * INT64 - Int64 type.
   *
   * Proto-based integer values are widened to int64.
   */
  INT64 = 2,
  /**
   * UINT64 - Uint64 type.
   *
   * Proto-based unsigned integer values are widened to uint64.
   */
  UINT64 = 3,
  /**
   * DOUBLE - Double type.
   *
   * Proto-based float values are widened to double values.
   */
  DOUBLE = 4,
  /** STRING - String type. */
  STRING = 5,
  /** BYTES - Bytes type. */
  BYTES = 6,
  UNRECOGNIZED = -1,
}

export function type_PrimitiveTypeFromJSON(object: any): Type_PrimitiveType {
  switch (object) {
    case 0:
    case "PRIMITIVE_TYPE_UNSPECIFIED":
      return Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED;
    case 1:
    case "BOOL":
      return Type_PrimitiveType.BOOL;
    case 2:
    case "INT64":
      return Type_PrimitiveType.INT64;
    case 3:
    case "UINT64":
      return Type_PrimitiveType.UINT64;
    case 4:
    case "DOUBLE":
      return Type_PrimitiveType.DOUBLE;
    case 5:
    case "STRING":
      return Type_PrimitiveType.STRING;
    case 6:
    case "BYTES":
      return Type_PrimitiveType.BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_PrimitiveType.UNRECOGNIZED;
  }
}

export function type_PrimitiveTypeToJSON(object: Type_PrimitiveType): string {
  switch (object) {
    case Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED:
      return "PRIMITIVE_TYPE_UNSPECIFIED";
    case Type_PrimitiveType.BOOL:
      return "BOOL";
    case Type_PrimitiveType.INT64:
      return "INT64";
    case Type_PrimitiveType.UINT64:
      return "UINT64";
    case Type_PrimitiveType.DOUBLE:
      return "DOUBLE";
    case Type_PrimitiveType.STRING:
      return "STRING";
    case Type_PrimitiveType.BYTES:
      return "BYTES";
    case Type_PrimitiveType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Well-known protobuf types treated with first-class support in CEL. */
export enum Type_WellKnownType {
  /** WELL_KNOWN_TYPE_UNSPECIFIED - Unspecified type. */
  WELL_KNOWN_TYPE_UNSPECIFIED = 0,
  /**
   * ANY - Well-known protobuf.Any type.
   *
   * Any types are a polymorphic message type. During type-checking they are
   * treated like `DYN` types, but at runtime they are resolved to a specific
   * message type specified at evaluation time.
   */
  ANY = 1,
  /** TIMESTAMP - Well-known protobuf.Timestamp type, internally referenced as `timestamp`. */
  TIMESTAMP = 2,
  /** DURATION - Well-known protobuf.Duration type, internally referenced as `duration`. */
  DURATION = 3,
  UNRECOGNIZED = -1,
}

export function type_WellKnownTypeFromJSON(object: any): Type_WellKnownType {
  switch (object) {
    case 0:
    case "WELL_KNOWN_TYPE_UNSPECIFIED":
      return Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED;
    case 1:
    case "ANY":
      return Type_WellKnownType.ANY;
    case 2:
    case "TIMESTAMP":
      return Type_WellKnownType.TIMESTAMP;
    case 3:
    case "DURATION":
      return Type_WellKnownType.DURATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_WellKnownType.UNRECOGNIZED;
  }
}

export function type_WellKnownTypeToJSON(object: Type_WellKnownType): string {
  switch (object) {
    case Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED:
      return "WELL_KNOWN_TYPE_UNSPECIFIED";
    case Type_WellKnownType.ANY:
      return "ANY";
    case Type_WellKnownType.TIMESTAMP:
      return "TIMESTAMP";
    case Type_WellKnownType.DURATION:
      return "DURATION";
    case Type_WellKnownType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListType {
  /** The element type. */
  elemType: Type | undefined;
}

/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
  /** The type of the key. */
  keyType:
    | Type
    | undefined;
  /** The type of the value. */
  valueType: Type | undefined;
}

/** Function type with result and arg types. */
export interface Type_FunctionType {
  /** Result type of the function. */
  resultType:
    | Type
    | undefined;
  /** Argument types of the function. */
  argTypes: Type[];
}

/** Application defined abstract type. */
export interface Type_AbstractType {
  /** The fully qualified name of this abstract type. */
  name: string;
  /** Parameter types for this abstract type. */
  parameterTypes: Type[];
}

/**
 * Represents a declaration of a named value or function.
 *
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface Decl {
  /**
   * The fully qualified name of the declaration.
   *
   * Declarations are organized in containers and this represents the full path
   * to the declaration in its container, as in `google.api.expr.Decl`.
   *
   * Declarations used as
   * [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload]
   * parameters may or may not have a name depending on whether the overload is
   * function declaration or a function definition containing a result
   * [Expr][google.api.expr.v1alpha1.Expr].
   */
  name: string;
  declKind?: { $case: "ident"; ident: Decl_IdentDecl } | { $case: "function"; function: Decl_FunctionDecl } | undefined;
}

/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 *
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDecl {
  /** Required. The type of the identifier. */
  type:
    | Type
    | undefined;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value:
    | Constant
    | undefined;
  /** Documentation string for the identifier. */
  doc: string;
}

/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 *
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDecl {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads: Decl_FunctionDecl_Overload[];
}

/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of
 * [Expr][google.api.expr.v1alpha1.Expr] values.
 *
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 *
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_Overload {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   *
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference]
   * to indicate the `overload_id` that was resolved for the function
   * `name`.
   */
  overloadId: string;
  /**
   * List of function parameter [Type][google.api.expr.v1alpha1.Type]
   * values.
   *
   * Param types are disjoint after generic type parameters have been
   * replaced with the type `DYN`. Since the `DYN` type is compatible with
   * any other type, this means that if `A` is a type parameter, the
   * function types `int<A>` and `int<int>` are not disjoint. Likewise,
   * `map<string, string>` is not disjoint from `map<K, V>`.
   *
   * When the `result_type` of a function is a generic type param, the
   * type param name also appears as the `type` of on at least one params.
   */
  params: Type[];
  /**
   * The type param names associated with the function declaration.
   *
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  typeParams: string[];
  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  resultType:
    | Type
    | undefined;
  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * or a function call-style `f(x, ...)`.
   *
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  isInstanceFunction: boolean;
  /** Documentation string for the overload. */
  doc: string;
}

/** Describes a resolved reference to a declaration. */
export interface Reference {
  /** The fully qualified name of the declaration. */
  name: string;
  /**
   * For references to functions, this is a list of `Overload.overload_id`
   * values which match according to typing rules.
   *
   * If the list has more than one element, overload resolution among the
   * presented candidates must happen at runtime because of dynamic types. The
   * type checker attempts to narrow down this list as much as possible.
   *
   * Empty if this is not a reference to a
   * [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
   */
  overloadId: string[];
  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value: Constant | undefined;
}

function createBaseCheckedExpr(): CheckedExpr {
  return { referenceMap: new Map(), typeMap: new Map(), sourceInfo: undefined, exprVersion: "", expr: undefined };
}

export const CheckedExpr = {
  encode(message: CheckedExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    (message.referenceMap).forEach((value, key) => {
      CheckedExpr_ReferenceMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    (message.typeMap).forEach((value, key) => {
      CheckedExpr_TypeMapEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.exprVersion !== "") {
      writer.uint32(50).string(message.exprVersion);
    }
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = CheckedExpr_ReferenceMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.referenceMap.set(entry2.key, entry2.value);
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = CheckedExpr_TypeMapEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.typeMap.set(entry3.key, entry3.value);
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.exprVersion = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expr = Expr.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckedExpr {
    return {
      referenceMap: isObject(object.referenceMap)
        ? Object.entries(object.referenceMap).reduce<Map<Long, Reference>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Reference.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      typeMap: isObject(object.typeMap)
        ? Object.entries(object.typeMap).reduce<Map<Long, Type>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Type.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
      exprVersion: isSet(object.exprVersion) ? String(object.exprVersion) : "",
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined,
    };
  },

  toJSON(message: CheckedExpr): unknown {
    const obj: any = {};
    if (message.referenceMap?.size) {
      obj.referenceMap = {};
      message.referenceMap.forEach((v, k) => {
        obj.referenceMap[longToNumber(k)] = Reference.toJSON(v);
      });
    }
    if (message.typeMap?.size) {
      obj.typeMap = {};
      message.typeMap.forEach((v, k) => {
        obj.typeMap[longToNumber(k)] = Type.toJSON(v);
      });
    }
    if (message.sourceInfo !== undefined) {
      obj.sourceInfo = SourceInfo.toJSON(message.sourceInfo);
    }
    if (message.exprVersion !== "") {
      obj.exprVersion = message.exprVersion;
    }
    if (message.expr !== undefined) {
      obj.expr = Expr.toJSON(message.expr);
    }
    return obj;
  },

  create(base?: DeepPartial<CheckedExpr>): CheckedExpr {
    return CheckedExpr.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CheckedExpr>): CheckedExpr {
    const message = createBaseCheckedExpr();
    message.referenceMap = (() => {
      const m = new Map();
      (object.referenceMap as Map<Long, Reference> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Reference.fromPartial(value));
        }
      });
      return m;
    })();
    message.typeMap = (() => {
      const m = new Map();
      (object.typeMap as Map<Long, Type> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Type.fromPartial(value));
        }
      });
      return m;
    })();
    message.sourceInfo = (object.sourceInfo !== undefined && object.sourceInfo !== null)
      ? SourceInfo.fromPartial(object.sourceInfo)
      : undefined;
    message.exprVersion = object.exprVersion ?? "";
    message.expr = (object.expr !== undefined && object.expr !== null) ? Expr.fromPartial(object.expr) : undefined;
    return message;
  },
};

function createBaseCheckedExpr_ReferenceMapEntry(): CheckedExpr_ReferenceMapEntry {
  return { key: Long.ZERO, value: undefined };
}

export const CheckedExpr_ReferenceMapEntry = {
  encode(message: CheckedExpr_ReferenceMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Reference.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_ReferenceMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Reference.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckedExpr_ReferenceMapEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Reference.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckedExpr_ReferenceMapEntry): unknown {
    const obj: any = {};
    if (!message.key.isZero()) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = Reference.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<CheckedExpr_ReferenceMapEntry>): CheckedExpr_ReferenceMapEntry {
    return CheckedExpr_ReferenceMapEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CheckedExpr_ReferenceMapEntry>): CheckedExpr_ReferenceMapEntry {
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? Reference.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCheckedExpr_TypeMapEntry(): CheckedExpr_TypeMapEntry {
  return { key: Long.ZERO, value: undefined };
}

export const CheckedExpr_TypeMapEntry = {
  encode(message: CheckedExpr_TypeMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Type.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_TypeMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_TypeMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Type.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckedExpr_TypeMapEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Type.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckedExpr_TypeMapEntry): unknown {
    const obj: any = {};
    if (!message.key.isZero()) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = Type.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<CheckedExpr_TypeMapEntry>): CheckedExpr_TypeMapEntry {
    return CheckedExpr_TypeMapEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CheckedExpr_TypeMapEntry>): CheckedExpr_TypeMapEntry {
    const message = createBaseCheckedExpr_TypeMapEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null) ? Type.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseType(): Type {
  return { typeKind: undefined };
}

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.typeKind?.$case) {
      case "dyn":
        Empty.encode(message.typeKind.dyn, writer.uint32(10).fork()).ldelim();
        break;
      case "null":
        writer.uint32(16).int32(message.typeKind.null);
        break;
      case "primitive":
        writer.uint32(24).int32(message.typeKind.primitive);
        break;
      case "wrapper":
        writer.uint32(32).int32(message.typeKind.wrapper);
        break;
      case "wellKnown":
        writer.uint32(40).int32(message.typeKind.wellKnown);
        break;
      case "listType":
        Type_ListType.encode(message.typeKind.listType, writer.uint32(50).fork()).ldelim();
        break;
      case "mapType":
        Type_MapType.encode(message.typeKind.mapType, writer.uint32(58).fork()).ldelim();
        break;
      case "function":
        Type_FunctionType.encode(message.typeKind.function, writer.uint32(66).fork()).ldelim();
        break;
      case "messageType":
        writer.uint32(74).string(message.typeKind.messageType);
        break;
      case "typeParam":
        writer.uint32(82).string(message.typeKind.typeParam);
        break;
      case "type":
        Type.encode(message.typeKind.type, writer.uint32(90).fork()).ldelim();
        break;
      case "error":
        Empty.encode(message.typeKind.error, writer.uint32(98).fork()).ldelim();
        break;
      case "abstractType":
        Type_AbstractType.encode(message.typeKind.abstractType, writer.uint32(114).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.typeKind = { $case: "dyn", dyn: Empty.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.typeKind = { $case: "null", null: reader.int32() as any };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.typeKind = { $case: "primitive", primitive: reader.int32() as any };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.typeKind = { $case: "wrapper", wrapper: reader.int32() as any };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.typeKind = { $case: "wellKnown", wellKnown: reader.int32() as any };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.typeKind = { $case: "listType", listType: Type_ListType.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.typeKind = { $case: "mapType", mapType: Type_MapType.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.typeKind = { $case: "function", function: Type_FunctionType.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.typeKind = { $case: "messageType", messageType: reader.string() };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.typeKind = { $case: "typeParam", typeParam: reader.string() };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.typeKind = { $case: "type", type: Type.decode(reader, reader.uint32()) };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.typeKind = { $case: "error", error: Empty.decode(reader, reader.uint32()) };
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.typeKind = { $case: "abstractType", abstractType: Type_AbstractType.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Type {
    return {
      typeKind: isSet(object.dyn)
        ? { $case: "dyn", dyn: Empty.fromJSON(object.dyn) }
        : isSet(object.null)
        ? { $case: "null", null: nullValueFromJSON(object.null) }
        : isSet(object.primitive)
        ? { $case: "primitive", primitive: type_PrimitiveTypeFromJSON(object.primitive) }
        : isSet(object.wrapper)
        ? { $case: "wrapper", wrapper: type_PrimitiveTypeFromJSON(object.wrapper) }
        : isSet(object.wellKnown)
        ? { $case: "wellKnown", wellKnown: type_WellKnownTypeFromJSON(object.wellKnown) }
        : isSet(object.listType)
        ? { $case: "listType", listType: Type_ListType.fromJSON(object.listType) }
        : isSet(object.mapType)
        ? { $case: "mapType", mapType: Type_MapType.fromJSON(object.mapType) }
        : isSet(object.function)
        ? { $case: "function", function: Type_FunctionType.fromJSON(object.function) }
        : isSet(object.messageType)
        ? { $case: "messageType", messageType: String(object.messageType) }
        : isSet(object.typeParam)
        ? { $case: "typeParam", typeParam: String(object.typeParam) }
        : isSet(object.type)
        ? { $case: "type", type: Type.fromJSON(object.type) }
        : isSet(object.error)
        ? { $case: "error", error: Empty.fromJSON(object.error) }
        : isSet(object.abstractType)
        ? { $case: "abstractType", abstractType: Type_AbstractType.fromJSON(object.abstractType) }
        : undefined,
    };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    if (message.typeKind?.$case === "dyn") {
      obj.dyn = Empty.toJSON(message.typeKind.dyn);
    }
    if (message.typeKind?.$case === "null") {
      obj.null = nullValueToJSON(message.typeKind.null);
    }
    if (message.typeKind?.$case === "primitive") {
      obj.primitive = type_PrimitiveTypeToJSON(message.typeKind.primitive);
    }
    if (message.typeKind?.$case === "wrapper") {
      obj.wrapper = type_PrimitiveTypeToJSON(message.typeKind.wrapper);
    }
    if (message.typeKind?.$case === "wellKnown") {
      obj.wellKnown = type_WellKnownTypeToJSON(message.typeKind.wellKnown);
    }
    if (message.typeKind?.$case === "listType") {
      obj.listType = Type_ListType.toJSON(message.typeKind.listType);
    }
    if (message.typeKind?.$case === "mapType") {
      obj.mapType = Type_MapType.toJSON(message.typeKind.mapType);
    }
    if (message.typeKind?.$case === "function") {
      obj.function = Type_FunctionType.toJSON(message.typeKind.function);
    }
    if (message.typeKind?.$case === "messageType") {
      obj.messageType = message.typeKind.messageType;
    }
    if (message.typeKind?.$case === "typeParam") {
      obj.typeParam = message.typeKind.typeParam;
    }
    if (message.typeKind?.$case === "type") {
      obj.type = Type.toJSON(message.typeKind.type);
    }
    if (message.typeKind?.$case === "error") {
      obj.error = Empty.toJSON(message.typeKind.error);
    }
    if (message.typeKind?.$case === "abstractType") {
      obj.abstractType = Type_AbstractType.toJSON(message.typeKind.abstractType);
    }
    return obj;
  },

  create(base?: DeepPartial<Type>): Type {
    return Type.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Type>): Type {
    const message = createBaseType();
    if (object.typeKind?.$case === "dyn" && object.typeKind?.dyn !== undefined && object.typeKind?.dyn !== null) {
      message.typeKind = { $case: "dyn", dyn: Empty.fromPartial(object.typeKind.dyn) };
    }
    if (object.typeKind?.$case === "null" && object.typeKind?.null !== undefined && object.typeKind?.null !== null) {
      message.typeKind = { $case: "null", null: object.typeKind.null };
    }
    if (
      object.typeKind?.$case === "primitive" &&
      object.typeKind?.primitive !== undefined &&
      object.typeKind?.primitive !== null
    ) {
      message.typeKind = { $case: "primitive", primitive: object.typeKind.primitive };
    }
    if (
      object.typeKind?.$case === "wrapper" &&
      object.typeKind?.wrapper !== undefined &&
      object.typeKind?.wrapper !== null
    ) {
      message.typeKind = { $case: "wrapper", wrapper: object.typeKind.wrapper };
    }
    if (
      object.typeKind?.$case === "wellKnown" &&
      object.typeKind?.wellKnown !== undefined &&
      object.typeKind?.wellKnown !== null
    ) {
      message.typeKind = { $case: "wellKnown", wellKnown: object.typeKind.wellKnown };
    }
    if (
      object.typeKind?.$case === "listType" &&
      object.typeKind?.listType !== undefined &&
      object.typeKind?.listType !== null
    ) {
      message.typeKind = { $case: "listType", listType: Type_ListType.fromPartial(object.typeKind.listType) };
    }
    if (
      object.typeKind?.$case === "mapType" &&
      object.typeKind?.mapType !== undefined &&
      object.typeKind?.mapType !== null
    ) {
      message.typeKind = { $case: "mapType", mapType: Type_MapType.fromPartial(object.typeKind.mapType) };
    }
    if (
      object.typeKind?.$case === "function" &&
      object.typeKind?.function !== undefined &&
      object.typeKind?.function !== null
    ) {
      message.typeKind = { $case: "function", function: Type_FunctionType.fromPartial(object.typeKind.function) };
    }
    if (
      object.typeKind?.$case === "messageType" &&
      object.typeKind?.messageType !== undefined &&
      object.typeKind?.messageType !== null
    ) {
      message.typeKind = { $case: "messageType", messageType: object.typeKind.messageType };
    }
    if (
      object.typeKind?.$case === "typeParam" &&
      object.typeKind?.typeParam !== undefined &&
      object.typeKind?.typeParam !== null
    ) {
      message.typeKind = { $case: "typeParam", typeParam: object.typeKind.typeParam };
    }
    if (object.typeKind?.$case === "type" && object.typeKind?.type !== undefined && object.typeKind?.type !== null) {
      message.typeKind = { $case: "type", type: Type.fromPartial(object.typeKind.type) };
    }
    if (object.typeKind?.$case === "error" && object.typeKind?.error !== undefined && object.typeKind?.error !== null) {
      message.typeKind = { $case: "error", error: Empty.fromPartial(object.typeKind.error) };
    }
    if (
      object.typeKind?.$case === "abstractType" &&
      object.typeKind?.abstractType !== undefined &&
      object.typeKind?.abstractType !== null
    ) {
      message.typeKind = {
        $case: "abstractType",
        abstractType: Type_AbstractType.fromPartial(object.typeKind.abstractType),
      };
    }
    return message;
  },
};

function createBaseType_ListType(): Type_ListType {
  return { elemType: undefined };
}

export const Type_ListType = {
  encode(message: Type_ListType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elemType !== undefined) {
      Type.encode(message.elemType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_ListType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_ListType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.elemType = Type.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Type_ListType {
    return { elemType: isSet(object.elemType) ? Type.fromJSON(object.elemType) : undefined };
  },

  toJSON(message: Type_ListType): unknown {
    const obj: any = {};
    if (message.elemType !== undefined) {
      obj.elemType = Type.toJSON(message.elemType);
    }
    return obj;
  },

  create(base?: DeepPartial<Type_ListType>): Type_ListType {
    return Type_ListType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Type_ListType>): Type_ListType {
    const message = createBaseType_ListType();
    message.elemType = (object.elemType !== undefined && object.elemType !== null)
      ? Type.fromPartial(object.elemType)
      : undefined;
    return message;
  },
};

function createBaseType_MapType(): Type_MapType {
  return { keyType: undefined, valueType: undefined };
}

export const Type_MapType = {
  encode(message: Type_MapType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== undefined) {
      Type.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueType !== undefined) {
      Type.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_MapType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_MapType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyType = Type.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valueType = Type.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Type_MapType {
    return {
      keyType: isSet(object.keyType) ? Type.fromJSON(object.keyType) : undefined,
      valueType: isSet(object.valueType) ? Type.fromJSON(object.valueType) : undefined,
    };
  },

  toJSON(message: Type_MapType): unknown {
    const obj: any = {};
    if (message.keyType !== undefined) {
      obj.keyType = Type.toJSON(message.keyType);
    }
    if (message.valueType !== undefined) {
      obj.valueType = Type.toJSON(message.valueType);
    }
    return obj;
  },

  create(base?: DeepPartial<Type_MapType>): Type_MapType {
    return Type_MapType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Type_MapType>): Type_MapType {
    const message = createBaseType_MapType();
    message.keyType = (object.keyType !== undefined && object.keyType !== null)
      ? Type.fromPartial(object.keyType)
      : undefined;
    message.valueType = (object.valueType !== undefined && object.valueType !== null)
      ? Type.fromPartial(object.valueType)
      : undefined;
    return message;
  },
};

function createBaseType_FunctionType(): Type_FunctionType {
  return { resultType: undefined, argTypes: [] };
}

export const Type_FunctionType = {
  encode(message: Type_FunctionType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.argTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_FunctionType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_FunctionType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resultType = Type.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.argTypes.push(Type.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Type_FunctionType {
    return {
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      argTypes: Array.isArray(object?.argTypes) ? object.argTypes.map((e: any) => Type.fromJSON(e)) : [],
    };
  },

  toJSON(message: Type_FunctionType): unknown {
    const obj: any = {};
    if (message.resultType !== undefined) {
      obj.resultType = Type.toJSON(message.resultType);
    }
    if (message.argTypes?.length) {
      obj.argTypes = message.argTypes.map((e) => Type.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Type_FunctionType>): Type_FunctionType {
    return Type_FunctionType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Type_FunctionType>): Type_FunctionType {
    const message = createBaseType_FunctionType();
    message.resultType = (object.resultType !== undefined && object.resultType !== null)
      ? Type.fromPartial(object.resultType)
      : undefined;
    message.argTypes = object.argTypes?.map((e) => Type.fromPartial(e)) || [];
    return message;
  },
};

function createBaseType_AbstractType(): Type_AbstractType {
  return { name: "", parameterTypes: [] };
}

export const Type_AbstractType = {
  encode(message: Type_AbstractType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.parameterTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_AbstractType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_AbstractType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parameterTypes.push(Type.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Type_AbstractType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parameterTypes: Array.isArray(object?.parameterTypes)
        ? object.parameterTypes.map((e: any) => Type.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Type_AbstractType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.parameterTypes?.length) {
      obj.parameterTypes = message.parameterTypes.map((e) => Type.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Type_AbstractType>): Type_AbstractType {
    return Type_AbstractType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Type_AbstractType>): Type_AbstractType {
    const message = createBaseType_AbstractType();
    message.name = object.name ?? "";
    message.parameterTypes = object.parameterTypes?.map((e) => Type.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDecl(): Decl {
  return { name: "", declKind: undefined };
}

export const Decl = {
  encode(message: Decl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    switch (message.declKind?.$case) {
      case "ident":
        Decl_IdentDecl.encode(message.declKind.ident, writer.uint32(18).fork()).ldelim();
        break;
      case "function":
        Decl_FunctionDecl.encode(message.declKind.function, writer.uint32(26).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.declKind = { $case: "ident", ident: Decl_IdentDecl.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.declKind = { $case: "function", function: Decl_FunctionDecl.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Decl {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      declKind: isSet(object.ident)
        ? { $case: "ident", ident: Decl_IdentDecl.fromJSON(object.ident) }
        : isSet(object.function)
        ? { $case: "function", function: Decl_FunctionDecl.fromJSON(object.function) }
        : undefined,
    };
  },

  toJSON(message: Decl): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.declKind?.$case === "ident") {
      obj.ident = Decl_IdentDecl.toJSON(message.declKind.ident);
    }
    if (message.declKind?.$case === "function") {
      obj.function = Decl_FunctionDecl.toJSON(message.declKind.function);
    }
    return obj;
  },

  create(base?: DeepPartial<Decl>): Decl {
    return Decl.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Decl>): Decl {
    const message = createBaseDecl();
    message.name = object.name ?? "";
    if (object.declKind?.$case === "ident" && object.declKind?.ident !== undefined && object.declKind?.ident !== null) {
      message.declKind = { $case: "ident", ident: Decl_IdentDecl.fromPartial(object.declKind.ident) };
    }
    if (
      object.declKind?.$case === "function" &&
      object.declKind?.function !== undefined &&
      object.declKind?.function !== null
    ) {
      message.declKind = { $case: "function", function: Decl_FunctionDecl.fromPartial(object.declKind.function) };
    }
    return message;
  },
};

function createBaseDecl_IdentDecl(): Decl_IdentDecl {
  return { type: undefined, value: undefined, doc: "" };
}

export const Decl_IdentDecl = {
  encode(message: Decl_IdentDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.doc !== "") {
      writer.uint32(26).string(message.doc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_IdentDecl {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_IdentDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = Type.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Constant.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.doc = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Decl_IdentDecl {
    return {
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined,
      doc: isSet(object.doc) ? String(object.doc) : "",
    };
  },

  toJSON(message: Decl_IdentDecl): unknown {
    const obj: any = {};
    if (message.type !== undefined) {
      obj.type = Type.toJSON(message.type);
    }
    if (message.value !== undefined) {
      obj.value = Constant.toJSON(message.value);
    }
    if (message.doc !== "") {
      obj.doc = message.doc;
    }
    return obj;
  },

  create(base?: DeepPartial<Decl_IdentDecl>): Decl_IdentDecl {
    return Decl_IdentDecl.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Decl_IdentDecl>): Decl_IdentDecl {
    const message = createBaseDecl_IdentDecl();
    message.type = (object.type !== undefined && object.type !== null) ? Type.fromPartial(object.type) : undefined;
    message.value = (object.value !== undefined && object.value !== null)
      ? Constant.fromPartial(object.value)
      : undefined;
    message.doc = object.doc ?? "";
    return message;
  },
};

function createBaseDecl_FunctionDecl(): Decl_FunctionDecl {
  return { overloads: [] };
}

export const Decl_FunctionDecl = {
  encode(message: Decl_FunctionDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.overloads) {
      Decl_FunctionDecl_Overload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.overloads.push(Decl_FunctionDecl_Overload.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Decl_FunctionDecl {
    return {
      overloads: Array.isArray(object?.overloads)
        ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Decl_FunctionDecl): unknown {
    const obj: any = {};
    if (message.overloads?.length) {
      obj.overloads = message.overloads.map((e) => Decl_FunctionDecl_Overload.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Decl_FunctionDecl>): Decl_FunctionDecl {
    return Decl_FunctionDecl.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Decl_FunctionDecl>): Decl_FunctionDecl {
    const message = createBaseDecl_FunctionDecl();
    message.overloads = object.overloads?.map((e) => Decl_FunctionDecl_Overload.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDecl_FunctionDecl_Overload(): Decl_FunctionDecl_Overload {
  return { overloadId: "", params: [], typeParams: [], resultType: undefined, isInstanceFunction: false, doc: "" };
}

export const Decl_FunctionDecl_Overload = {
  encode(message: Decl_FunctionDecl_Overload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overloadId !== "") {
      writer.uint32(10).string(message.overloadId);
    }
    for (const v of message.params) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.typeParams) {
      writer.uint32(26).string(v!);
    }
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(34).fork()).ldelim();
    }
    if (message.isInstanceFunction === true) {
      writer.uint32(40).bool(message.isInstanceFunction);
    }
    if (message.doc !== "") {
      writer.uint32(50).string(message.doc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl_Overload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl_Overload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.overloadId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params.push(Type.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.typeParams.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resultType = Type.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isInstanceFunction = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.doc = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Decl_FunctionDecl_Overload {
    return {
      overloadId: isSet(object.overloadId) ? String(object.overloadId) : "",
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromJSON(e)) : [],
      typeParams: Array.isArray(object?.typeParams) ? object.typeParams.map((e: any) => String(e)) : [],
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      isInstanceFunction: isSet(object.isInstanceFunction) ? Boolean(object.isInstanceFunction) : false,
      doc: isSet(object.doc) ? String(object.doc) : "",
    };
  },

  toJSON(message: Decl_FunctionDecl_Overload): unknown {
    const obj: any = {};
    if (message.overloadId !== "") {
      obj.overloadId = message.overloadId;
    }
    if (message.params?.length) {
      obj.params = message.params.map((e) => Type.toJSON(e));
    }
    if (message.typeParams?.length) {
      obj.typeParams = message.typeParams;
    }
    if (message.resultType !== undefined) {
      obj.resultType = Type.toJSON(message.resultType);
    }
    if (message.isInstanceFunction === true) {
      obj.isInstanceFunction = message.isInstanceFunction;
    }
    if (message.doc !== "") {
      obj.doc = message.doc;
    }
    return obj;
  },

  create(base?: DeepPartial<Decl_FunctionDecl_Overload>): Decl_FunctionDecl_Overload {
    return Decl_FunctionDecl_Overload.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Decl_FunctionDecl_Overload>): Decl_FunctionDecl_Overload {
    const message = createBaseDecl_FunctionDecl_Overload();
    message.overloadId = object.overloadId ?? "";
    message.params = object.params?.map((e) => Type.fromPartial(e)) || [];
    message.typeParams = object.typeParams?.map((e) => e) || [];
    message.resultType = (object.resultType !== undefined && object.resultType !== null)
      ? Type.fromPartial(object.resultType)
      : undefined;
    message.isInstanceFunction = object.isInstanceFunction ?? false;
    message.doc = object.doc ?? "";
    return message;
  },
};

function createBaseReference(): Reference {
  return { name: "", overloadId: [], value: undefined };
}

export const Reference = {
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.overloadId) {
      writer.uint32(26).string(v!);
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.overloadId.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = Constant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      overloadId: Array.isArray(object?.overloadId) ? object.overloadId.map((e: any) => String(e)) : [],
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.overloadId?.length) {
      obj.overloadId = message.overloadId;
    }
    if (message.value !== undefined) {
      obj.value = Constant.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<Reference>): Reference {
    return Reference.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.name = object.name ?? "";
    message.overloadId = object.overloadId?.map((e) => e) || [];
    message.value = (object.value !== undefined && object.value !== null)
      ? Constant.fromPartial(object.value)
      : undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
