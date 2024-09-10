import 'package:efecankatturkmen/ui/home/home_page.dart';
import 'package:efecankatturkmen/ui/shell/collapableshellnav.dart';
import 'package:efecankatturkmen/ui/shell/shellnav.dart';
import 'package:efecankatturkmen/ui/test_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AppRouter {
  GoRouter get router => appRouter;
  AppRouter();
  final GlobalKey<NavigatorState> _rootNavigatorKey =
      GlobalKey<NavigatorState>();
  final ScrollController _scrollController = ScrollController();
  late final GoRouter appRouter =
      GoRouter(debugLogDiagnostics: true, initialLocation: "/home", routes: [
    GoRoute(
        path: '/test',
        builder: (BuildContext context, GoRouterState state) {
          return TestPage();
        }),
    ShellRoute(
        builder: (BuildContext context, GoRouterState state, Widget child) {
          return CollapsibleAppBarScreen(
            child: child,
            scrollController: _scrollController,
          );
        },
        routes: [
          GoRoute(
              path: '/home',
              builder: (BuildContext context, GoRouterState state) {
                return LandingpageWidget(
                  scrollController: _scrollController,
                );
              }),
        ]),
    ShellRoute(
        builder: (BuildContext context, GoRouterState state, Widget child) {
          return ResponsiveNavBarPage(child: child);
        },
        routes: [
          GoRoute(
              path: '/about',
              builder: (BuildContext context, GoRouterState state) {
                return LandingpageWidget(
                  scrollController: _scrollController,
                );
              }),
        ])
  ]);
}
