import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:freezed_annotation/freezed_annotation.dart';

// part 'project.freezed.dart';
// part 'project.g.dart';

// @freezed
// class Project with _$Project {
//   factory Project({required String id, required String label}) = _Project;

//   factory Project.fromJson(Map<String, dynamic> json) =>
//       _$ProjectFromJson(json);
// }

class Project {
  final String? label;
  final String? githubUrl;
  final String? websitebUrl;
  final String? imageUrl;
  final String? description;
  final bool? isActive;
  final DateTime? start_date;
  final DateTime? end_date;
  final DocumentSnapshot? snapshot;
  final DocumentReference? reference;
  final String? documentID;

  Project({
    this.label,
    this.githubUrl,
    this.websitebUrl,
    this.imageUrl,
    this.description,
    this.isActive,
    this.start_date,
    this.end_date,
    this.snapshot,
    this.reference,
    this.documentID,
  });

  factory Project.fromFirestore(
    DocumentSnapshot<Map<String, dynamic>> snapshot,
    SnapshotOptions? options,
  ) {
    var map = snapshot.data();

    return Project(
      label: map?['label'] != null ? (map?['label']) : null,
      githubUrl: map?['label'] != null ? (map?['label']) : null,
      websitebUrl: map?['label'] != null ? (map?['label']) : null,
      imageUrl: map?['label'] != null ? (map?['label']) : null,
      description: map?['label'] != null ? (map?['label']) : null,
      isActive: map?['label'] != null ? (map?['label']) : false,
      start_date: map?['label'] != null ? (map?['label']) : null,
      end_date: map?['label'] != null ? (map?['label']) : null,
      snapshot: snapshot,
      reference: snapshot.reference,
      documentID: snapshot.id,
    );
  }

  factory Project.fromMap(Map<String, dynamic> map) {
    if (map == null) return Project();

    return Project(
      label: map['label'] != null ? map['label'] : null,
    );
  }

  Map<String, dynamic> toMap() => {
        'label': label,
        'githubUrl': githubUrl,
        'websitebUrl': websitebUrl,
        'imageUrl': imageUrl,
        'description': description,
        'isActive': isActive,
        'start_date': start_date,
        'end_date': end_date,
      };

  Project copyWith({
    String? label,
    String? githubUrl,
    String? websitebUrl,
    String? imageUrl,
    String? description,
    bool? isActive,
    DateTime? start_date,
    DateTime? end_date,
  }) {
    return Project(
      label: label ?? this.label,
      githubUrl: githubUrl ?? this.githubUrl,
      websitebUrl: websitebUrl ?? this.websitebUrl,
      imageUrl: imageUrl ?? this.imageUrl,
      description: description ?? this.description,
      isActive: isActive ?? this.isActive,
      start_date: start_date ?? this.start_date,
      end_date: end_date ?? this.end_date,
    );
  }

  @override
  String toString() {
    return '${label.toString()}, ${githubUrl.toString()}, ${websitebUrl.toString()}, ${imageUrl.toString()}, ${description.toString()}, ${isActive.toString()}, ${start_date.toString()}, ${end_date.toString()}, ';
  }

  @override
  bool operator ==(other) => other is Project && documentID == other.documentID;

  int get hashCode => documentID.hashCode;
}
