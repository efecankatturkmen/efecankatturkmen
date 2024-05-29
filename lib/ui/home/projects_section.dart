import 'package:efecankatturkmen/models/project/project.dart';
import 'package:efecankatturkmen/providers/projects_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ProjectsWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Screen dimensions
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 600;

    return Consumer(builder: (context, ref, child) {
      final AsyncValue<List<Project>> projects =
          ref.watch(fetchProjectsProvider);
      return Container(
        height: 400,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                'PORTFOLIO',
                textAlign: TextAlign.left,
                style: TextStyle(
                  color: Color.fromRGBO(75, 111, 239, 1),
                  fontFamily: 'Poppins',
                  fontSize: 24,
                  fontWeight: FontWeight.normal,
                  height: 1,
                ),
              ),
              SizedBox(height: 48),
              Text(
                'LATEST PROJECTS',
                textAlign: TextAlign.left,
                style: TextStyle(
                  color: Color.fromRGBO(255, 255, 255, 1),
                  fontFamily: 'Poppins',
                  fontSize: 36,
                  fontWeight: FontWeight.normal,
                  height: 1,
                ),
              ),
              SizedBox(height: 48),
              Expanded(
                child: Column(
                  children: [
                    Expanded(
                      child: Row(
                        children: [
                          Expanded(
                            child: ProjectCard(
                              imageUrl: 'assets/images/Travelappmodal11.png',
                              title: 'Travel App Design',
                            ),
                          ),
                          SizedBox(width: 20),
                          Expanded(
                            child: ProjectCard(
                              imageUrl:
                                  'assets/images/Cafestreetwebdesign1.png',
                              title: 'Cafe Street Web Design',
                            ),
                          ),
                          SizedBox(width: 20),
                          Expanded(
                            child: ProjectCard(
                              imageUrl: 'assets/images/Portfolio11.png',
                              title: 'Need Food App Design',
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      );
    });
  }
}

class ProjectCard extends StatelessWidget {
  final String imageUrl;
  final String title;

  ProjectCard({required this.imageUrl, required this.title});

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
          ClipRRect(
            borderRadius: BorderRadius.vertical(top: Radius.circular(12)),
            child: Image.asset(
              imageUrl,
              width: double.infinity,
              height: 283,
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: Color.fromRGBO(255, 255, 255, 1),
                    fontFamily: 'Poppins',
                    fontSize: 20,
                    fontWeight: FontWeight.normal,
                  ),
                ),
                SizedBox(height: 20),
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(6),
                    color: Color.fromRGBO(84, 142, 255, 1),
                  ),
                  padding: EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                  child: Text(
                    'View Demo',
                    style: TextStyle(
                      color: Color.fromRGBO(255, 255, 255, 1),
                      fontFamily: 'Poppins',
                      fontSize: 14,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
