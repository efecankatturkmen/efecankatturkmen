// // coverage:ignore-file
// // GENERATED CODE - DO NOT MODIFY BY HAND
// // ignore_for_file: type=lint
// // ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

// part of 'project.dart';

// // **************************************************************************
// // FreezedGenerator
// // **************************************************************************

// T _$identity<T>(T value) => value;

// final _privateConstructorUsedError = UnsupportedError(
//     'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

// Project _$ProjectFromJson(Map<String, dynamic> json) {
//   return _Project.fromJson(json);
// }

// /// @nodoc
// mixin _$Project {
//   String get id => throw _privateConstructorUsedError;
//   String get label => throw _privateConstructorUsedError;

//   Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
//   @JsonKey(ignore: true)
//   $ProjectCopyWith<Project> get copyWith => throw _privateConstructorUsedError;
// }

// /// @nodoc
// abstract class $ProjectCopyWith<$Res> {
//   factory $ProjectCopyWith(Project value, $Res Function(Project) then) =
//       _$ProjectCopyWithImpl<$Res, Project>;
//   @useResult
//   $Res call({String id, String label});
// }

// /// @nodoc
// class _$ProjectCopyWithImpl<$Res, $Val extends Project>
//     implements $ProjectCopyWith<$Res> {
//   _$ProjectCopyWithImpl(this._value, this._then);

//   // ignore: unused_field
//   final $Val _value;
//   // ignore: unused_field
//   final $Res Function($Val) _then;

//   @pragma('vm:prefer-inline')
//   @override
//   $Res call({
//     Object? id = null,
//     Object? label = null,
//   }) {
//     return _then(_value.copyWith(
//       id: null == id
//           ? _value.id
//           : id // ignore: cast_nullable_to_non_nullable
//               as String,
//       label: null == label
//           ? _value.label
//           : label // ignore: cast_nullable_to_non_nullable
//               as String,
//     ) as $Val);
//   }
// }

// /// @nodoc
// abstract class _$$ProjectImplCopyWith<$Res> implements $ProjectCopyWith<$Res> {
//   factory _$$ProjectImplCopyWith(
//           _$ProjectImpl value, $Res Function(_$ProjectImpl) then) =
//       __$$ProjectImplCopyWithImpl<$Res>;
//   @override
//   @useResult
//   $Res call({String id, String label});
// }

// /// @nodoc
// class __$$ProjectImplCopyWithImpl<$Res>
//     extends _$ProjectCopyWithImpl<$Res, _$ProjectImpl>
//     implements _$$ProjectImplCopyWith<$Res> {
//   __$$ProjectImplCopyWithImpl(
//       _$ProjectImpl _value, $Res Function(_$ProjectImpl) _then)
//       : super(_value, _then);

//   @pragma('vm:prefer-inline')
//   @override
//   $Res call({
//     Object? id = null,
//     Object? label = null,
//   }) {
//     return _then(_$ProjectImpl(
//       id: null == id
//           ? _value.id
//           : id // ignore: cast_nullable_to_non_nullable
//               as String,
//       label: null == label
//           ? _value.label
//           : label // ignore: cast_nullable_to_non_nullable
//               as String,
//     ));
//   }
// }

// /// @nodoc
// @JsonSerializable()
// class _$ProjectImpl implements _Project {
//   _$ProjectImpl({required this.id, required this.label});

//   factory _$ProjectImpl.fromJson(Map<String, dynamic> json) =>
//       _$$ProjectImplFromJson(json);

//   @override
//   final String id;
//   @override
//   final String label;

//   @override
//   String toString() {
//     return 'Project(id: $id, label: $label)';
//   }

//   @override
//   bool operator ==(Object other) {
//     return identical(this, other) ||
//         (other.runtimeType == runtimeType &&
//             other is _$ProjectImpl &&
//             (identical(other.id, id) || other.id == id) &&
//             (identical(other.label, label) || other.label == label));
//   }

//   @JsonKey(ignore: true)
//   @override
//   int get hashCode => Object.hash(runtimeType, id, label);

//   @JsonKey(ignore: true)
//   @override
//   @pragma('vm:prefer-inline')
//   _$$ProjectImplCopyWith<_$ProjectImpl> get copyWith =>
//       __$$ProjectImplCopyWithImpl<_$ProjectImpl>(this, _$identity);

//   @override
//   Map<String, dynamic> toJson() {
//     return _$$ProjectImplToJson(
//       this,
//     );
//   }
// }

// abstract class _Project implements Project {
//   factory _Project({required final String id, required final String label}) =
//       _$ProjectImpl;

//   factory _Project.fromJson(Map<String, dynamic> json) = _$ProjectImpl.fromJson;

//   @override
//   String get id;
//   @override
//   String get label;
//   @override
//   @JsonKey(ignore: true)
//   _$$ProjectImplCopyWith<_$ProjectImpl> get copyWith =>
//       throw _privateConstructorUsedError;
// }
