import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:efecankatturkmen/models/project/project.dart';

import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'projects_provider.g.dart';

FirebaseFirestore db = FirebaseFirestore.instance;
@riverpod
Future<List<Project>> fetchProjects(FetchProjectsRef ref) async {
  List<Project> allProjects = [];
  await db
      .collection('projects')
      .withConverter(
          fromFirestore: Project.fromFirestore,
          toFirestore: (Project project, _) => project.toMap())
      .get()
      .then((value) {
    var x = value;
  });

  return allProjects;
}
