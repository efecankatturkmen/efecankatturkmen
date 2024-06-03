import 'package:cached_network_image/cached_network_image.dart';
import 'package:efecankatturkmen/models/project/project.dart';
import 'package:flutter/material.dart';
import 'package:octo_image/octo_image.dart';

class ProjectCard extends StatelessWidget {
  final Project project;
  ProjectCard({required this.project});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Color.fromRGBO(41, 44, 54, 1),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                CircleAvatar(
                  backgroundColor: project.isActive == true
                      ? Colors.greenAccent
                      : Colors.red,
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    project.isActive == true ? "Active" : "Not Active",
                    style: TextStyle(color: Colors.white),
                  ),
                )
              ],
            ),
          ),
          project.imageUrl != null
              ?
              // Text(project.imageUrl!)
              ClipRRect(
                  borderRadius: BorderRadius.vertical(top: Radius.circular(12)),
                  child: OctoImage(
                    image: CachedNetworkImageProvider(project.imageUrl!),
                    progressIndicatorBuilder:
                        OctoProgressIndicator.circularProgressIndicator(),
                    errorBuilder: OctoError.icon(color: Colors.red),
                    fit: BoxFit.cover,
                  )
                  // Image.network(
                  //   project.imageUrl!,
                  //   width: double.infinity,
                  //   height: 283,
                  //   fit: BoxFit.cover,
                  // ),
                  )
              : SizedBox(),
          Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  project.label!,
                  style: TextStyle(
                    color: Color.fromRGBO(255, 255, 255, 1),
                    fontFamily: 'Poppins',
                    fontSize: 20,
                    fontWeight: FontWeight.normal,
                  ),
                ),
                SizedBox(height: 20),
                Wrap(
                  children: [
                    project.githubUrl != null
                        ? Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(6),
                              color: Color.fromRGBO(84, 142, 255, 1),
                            ),
                            padding: EdgeInsets.symmetric(
                                horizontal: 18, vertical: 10),
                            child: Text(
                              'Github',
                              style: TextStyle(
                                color: Color.fromRGBO(255, 255, 255, 1),
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                fontWeight: FontWeight.normal,
                              ),
                            ),
                          )
                        : SizedBox(),
                  ],
                ),
                // Container(
                //   decoration: BoxDecoration(
                //     borderRadius: BorderRadius.circular(6),
                //     color: Color.fromRGBO(84, 142, 255, 1),
                //   ),
                //   padding: EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                //   child: Text(
                //     'View Demo',
                //     style: TextStyle(
                //       color: Color.fromRGBO(255, 255, 255, 1),
                //       fontFamily: 'Poppins',
                //       fontSize: 14,
                //       fontWeight: FontWeight.normal,
                //     ),
                //   ),
                // ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
