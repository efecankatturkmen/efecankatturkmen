import 'package:cached_network_image/cached_network_image.dart';
import 'package:efecankatturkmen/models/project/project.dart';
import 'package:flutter/material.dart';
import 'package:octo_image/octo_image.dart';
import 'dart:js' as js;

class ProjectCard extends StatelessWidget {
  final Project project;
  ProjectCard({required this.project});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      color: Color.fromRGBO(41, 44, 54, 1),
      clipBehavior: Clip.antiAlias,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // Project Image Avatar
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: project.imageUrl != null
                ? CircleAvatar(
                    radius: 40,
                    backgroundColor: Colors.transparent,
                    child: ClipOval(
                      child: OctoImage(
                        image: CachedNetworkImageProvider(project.imageUrl!),
                        progressIndicatorBuilder:
                            OctoProgressIndicator.circularProgressIndicator(),
                        errorBuilder: OctoError.icon(color: Colors.red),
                        fit: BoxFit.cover,
                        width: 80,
                        height: 80,
                      ),
                    ),
                  )
                : CircleAvatar(
                    radius: 40,
                    backgroundColor: Color.fromRGBO(84, 142, 255, 0.3),
                    child: Icon(
                      Icons.image,
                      size: 32,
                      color: Color.fromRGBO(84, 142, 255, 1),
                    ),
                  ),
          ),

          // Content Section
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // Header with Status Badge
                Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      project.label ?? 'Untitled Project',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Color.fromRGBO(255, 255, 255, 1),
                        fontFamily: 'Poppins',
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                      height: 1.2,
                    ),
                    ),
                    SizedBox(height: 6),
                    // Status Badge
                    Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 6,
                      ),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: project.isActive == true
                            ? Colors.greenAccent.withOpacity(0.2)
                            : Colors.red.withOpacity(0.2),
                        border: Border.all(
                          color: project.isActive == true
                              ? Colors.greenAccent
                              : Colors.red,
                          width: 1,
                        ),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Container(
                            width: 8,
                            height: 8,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: project.isActive == true
                                  ? Colors.greenAccent
                                  : Colors.red,
                            ),
                          ),
                          SizedBox(width: 6),
                          Text(
                            project.isActive == true
                                ? "Active"
                                : "Not Active",
                            style: TextStyle(
                              color: project.isActive == true
                                  ? Colors.greenAccent
                                  : Colors.red,
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),

                // Description
                if (project.description != null && project.description!.isNotEmpty) ...[
                  SizedBox(height: 8),
                  Text(
                    project.description!,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Color.fromRGBO(200, 200, 200, 1),
                      fontFamily: 'Poppins',
                      fontSize: 11,
                      fontWeight: FontWeight.normal,
                      height: 1.3,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],

                // Languages
                if (project.languages != null && project.languages!.isNotEmpty) ...[
                  SizedBox(height: 8),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    alignment: WrapAlignment.center,
                    children: project.languages!
                        .map(
                          (language) => Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8),
                              color: Color.fromRGBO(84, 142, 255, 1),
                            ),
                            padding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 6,
                            ),
                            child: Text(
                              language,
                              style: TextStyle(
                                color: Color.fromRGBO(255, 255, 255, 1),
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                        )
                        .toList(),
                  ),
                ],

                // Action Buttons
                SizedBox(height: 8),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  alignment: WrapAlignment.center,
                  children: [
                    if (project.githubUrl != null)
                      _ActionButton(
                        label: 'GitHub',
                        icon: Icons.code,
                        onPressed: () {
                          js.context.callMethod('open', [project.githubUrl]);
                        },
                      ),
                    if (project.websiteUrl != null)
                      _ActionButton(
                        label: 'Website',
                        icon: Icons.language,
                        onPressed: () {
                          js.context.callMethod('open', [project.websiteUrl]);
                        },
                      ),
                  ],
                ),
              ],
            ),
          ),
          SizedBox(height: 8),
        ],
      ),
    );
  }
}

class _ActionButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final VoidCallback onPressed;

  const _ActionButton({
    required this.label,
    required this.icon,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: onPressed,
      icon: Icon(icon, size: 18),
      label: Text(label),
      style: ElevatedButton.styleFrom(
        backgroundColor: Color.fromRGBO(84, 142, 255, 1),
        foregroundColor: Colors.white,
        padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
        elevation: 2,
        minimumSize: Size(0, 32),
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
      ),
    );
  }
}
