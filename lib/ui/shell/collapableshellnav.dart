import 'package:efecankatturkmen/ui/footer_section.dart';
import 'package:efecankatturkmen/ui/home/home_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/svg.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'dart:js' as js;

class CollapsibleAppBarScreen extends StatefulWidget {
  final ScrollController scrollController;

  Widget child;
  CollapsibleAppBarScreen(
      {Key? key, required this.child, required this.scrollController})
      : super(key: key);

  @override
  _CollapsibleAppBarScreenState createState() =>
      _CollapsibleAppBarScreenState();
}

class _CollapsibleAppBarScreenState extends State<CollapsibleAppBarScreen> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final bool isLargeScreen = width > 800;

    Widget _navBarItems() {
      return Row(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: _menuItems
            .map(
              (item) => InkWell(
                splashColor: Colors.black,
                focusColor: Colors.black,
                hoverColor: Colors.black,
                borderRadius: BorderRadius.all(Radius.circular(20)),
                onTap: () {
                  Scrollable.ensureVisible(item['key'].currentContext!,
                      duration: const Duration(milliseconds: 500));
                },
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      vertical: 24.0, horizontal: 16),
                  child: Text(
                    item['label'],
                    style: const TextStyle(
                        fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            )
            .toList(),
      );
    }

    return Scaffold(
      key: _scaffoldKey,
      drawer: isLargeScreen ? null : _drawer(),
      body: CustomScrollView(
        controller: widget.scrollController,
        // shrinkWrap: true,
        slivers: <Widget>[
          SliverAppBar(
            backgroundColor: Colors.black,
            elevation: 0,
            titleSpacing: 0,
            leading: isLargeScreen
                ? null
                : IconButton(
                    icon: const Icon(Icons.menu),
                    onPressed: () => _scaffoldKey.currentState?.openDrawer(),
                  ),
            expandedHeight: 500.0,
            floating: false,
            pinned: true,
            flexibleSpace: LayoutBuilder(
                builder: (BuildContext context, BoxConstraints constraints) {
              var top = constraints.biggest.height;
              return FlexibleSpaceBar(
                title: top <= 100.0 // The height of the collapsed app bar
                    ? null
                    : Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Text(
                              "I'm Efe Cankat Turkmen",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 30),
                            ),
                            SizedBox(
                              height: 20,
                            ),
                            Text(
                              "Front-End Web & Mobile Development",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 10),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                IconButton(
                                    onPressed: () {
                                      js.context.callMethod('open', [
                                        "https://www.instagram.com/cankatturkmen"
                                      ]);
                                    },
                                    icon: Icon(FontAwesomeIcons.instagram)),
                                IconButton(
                                    onPressed: () {
                                      js.context.callMethod('open', [
                                        "https://github.com/efecankatturkmen"
                                      ]);
                                    },
                                    icon: Icon(FontAwesomeIcons.github)),
                                IconButton(
                                    onPressed: () {
                                      js.context.callMethod('open', [
                                        "https://www.linkedin.com/in/cankat-turkmen/"
                                      ]);
                                    },
                                    icon: Icon(FontAwesomeIcons.linkedin))
                              ],
                            ),
                            SizedBox(
                              height: 40,
                            )
                          ],
                        ),
                      ),
                background: Image.asset(
                  'lib/assets/Bgimage1.png',
                  fit: BoxFit.cover,
                ),
              );
            }),
            title: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SvgPicture.asset(
                    'lib/assets/ect_logo.svg',
                    fit: BoxFit.fitWidth,
                    width: 40,
                  ),
                  const Text(
                    "Cankat T.",
                    style: TextStyle(
                        color: Colors.white, fontWeight: FontWeight.bold),
                  ),
                  if (isLargeScreen) Expanded(child: _navBarItems())
                ],
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: widget.child,
          ),
          SliverToBoxAdapter(
            child: FooterSection(),
          )
          // SliverList(
          //   delegate: SliverChildBuilderDelegate(
          //     (BuildContext context, int index) {
          //       return ListTile(
          //         title: Text('Item #$index'),
          //       );
          //     },
          //     childCount: 100, // Number of items in the list
          //   ),
          // ),
        ],
      ),
    );
  }

  Widget _drawer() => Drawer(
        child: ListView(
          children: _menuItems
              .map((item) => ListTile(
                    onTap: () {
                      Scrollable.ensureVisible(item['key'].currentContext!,
                          duration: const Duration(milliseconds: 500));
                    },
                    title: Text(item['label']),
                  ))
              .toList(),
        ),
      );
}

final GlobalKey aboutKey = GlobalKey();
final GlobalKey whatdoidoKey = GlobalKey();
final GlobalKey projectsKey = GlobalKey();
final GlobalKey contactKey = GlobalKey();

final List<Map<String, dynamic>> _menuItems = [
  {
    "key": aboutKey,
    'name': 'about',
    'label': 'About',
  },
  {
    "key": whatdoidoKey,
    'name': 'what_do_i_do',
    'label': 'What Do I Do',
  },
  {
    "key": projectsKey,
    'name': 'projects',
    'label': 'Projects',
  },
  {
    "key": contactKey,
    'name': 'contact',
    'label': 'Contact',
  },
];
