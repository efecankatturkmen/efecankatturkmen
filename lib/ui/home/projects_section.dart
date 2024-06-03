import 'package:carousel_slider/carousel_slider.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:efecankatturkmen/models/project/project.dart';
import 'package:efecankatturkmen/providers/projects_provider.dart';
import 'package:efecankatturkmen/widgets/projectcart.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ProjectsWidget extends ConsumerStatefulWidget {
  const ProjectsWidget({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _ProjectsWidgetState();
}

class _ProjectsWidgetState extends ConsumerState<ProjectsWidget> {
  final CarouselController _controller = CarouselController();
  int _current = 0;
  @override
  void initState() {
    super.initState();

    // State life-cycles have access to "ref" too.
    // This enables things such as adding a listener on a specific provider
    // to show dialogs/snackbars.
    // ref.listenManual(activityProvider, (previous, next) {
    //   // TODO show a snackbar/dialog
    // });
  }

  @override
  Widget build(BuildContext context) {
    // Screen dimensions
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 600;

    return Consumer(builder: (context, ref, child) {
      final AsyncValue<List<QueryDocumentSnapshot<Project>>> projects =
          ref.watch(fetchProjectsProvider);
      return Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Center(
              child: Text(
                'PORTFOLIO',
                textAlign: TextAlign.left,
                style: TextStyle(
                  color: Colors.red,
                  fontFamily: 'Poppins',
                  fontSize: 24,
                  fontWeight: FontWeight.normal,
                  height: 1,
                ),
              ),
            ),
            SizedBox(height: 48),
            Center(
              child: Text(
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
            ),
            SizedBox(height: 48),
            switch (projects) {
              AsyncData(:final value) => Column(
                  children: [
                    CarouselSlider(
                      carouselController: _controller,
                      options: CarouselOptions(
                        enlargeCenterPage: true,
                        height: 300.0,
                        autoPlay: true,
                        aspectRatio: 16 / 9,
                        viewportFraction: 0.3,
                        onPageChanged: (index, reason) {
                          setState(() {
                            _current = index;
                          });
                        },
                      ),
                      items: value.map((i) {
                        return Builder(
                          builder: (BuildContext context) {
                            return ProjectCard(
                              project: i.data(),
                            );
                          },
                        );
                      }).toList(),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: value.asMap().entries.map((entry) {
                        return GestureDetector(
                          onTap: () => _controller.animateToPage(entry.key),
                          child: Container(
                            width: 12.0,
                            height: 12.0,
                            margin: EdgeInsets.symmetric(
                                vertical: 8.0, horizontal: 4.0),
                            decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: (Theme.of(context).brightness ==
                                            Brightness.dark
                                        ? Colors.white
                                        : Colors.black)
                                    .withOpacity(
                                        _current == entry.key ? 0.9 : 0.4)),
                          ),
                        );
                      }).toList(),
                    ),
                  ],
                ),

              // Row(
              //     children: [
              //       Expanded(
              //         child: ListView.builder(
              //           shrinkWrap: true,
              //           scrollDirection: Axis.vertical,
              //           itemCount: value.length,
              //           itemBuilder: (BuildContext context, int index) {
              //             // return Text(
              //             //   value[index].data().label!,
              //             //   style: TextStyle(color: Colors.white),
              //             // );

              //             return ProjectCard(
              //               imageUrl: value[index].data().label!,
              //               title: value[index].data().label!,
              //             );
              //           },
              //         ),
              //       ),
              //     ],
              //   ),
              AsyncError() => const Text('Oops, something unexpected happened'),
              _ => const CircularProgressIndicator(),
            },
            SizedBox(height: 48),
          ],
        ),
      );
    });
  }
}
