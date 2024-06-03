// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'projects_provider.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

String _$fetchProjectsHash() => r'f2f4cdcac747b883a315d6d1475b3cd7fc00ea03';

/// See also [fetchProjects].
@ProviderFor(fetchProjects)
final fetchProjectsProvider =
    AutoDisposeFutureProvider<List<QueryDocumentSnapshot<Project>>>.internal(
  fetchProjects,
  name: r'fetchProjectsProvider',
  debugGetCreateSourceHash: const bool.fromEnvironment('dart.vm.product')
      ? null
      : _$fetchProjectsHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

typedef FetchProjectsRef
    = AutoDisposeFutureProviderRef<List<QueryDocumentSnapshot<Project>>>;
// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member
