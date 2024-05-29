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
  final DocumentSnapshot? snapshot;
  final DocumentReference? reference;
  final String? documentID;

  Project({
    this.label,
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
      };

  Project copyWith({
    String? label,
  }) {
    return Project(
      label: label ?? this.label,
    );
  }

  @override
  String toString() {
    return '${label.toString()}, ';
  }

  @override
  bool operator ==(other) => other is Project && documentID == other.documentID;

  int get hashCode => documentID.hashCode;
}
