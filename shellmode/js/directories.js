/*
 * Write directories structure here.
 * How to :
 * 1. declare the directory : dirs["dirname"] = { ".":"dirname" }; 
 *        and if not rootdir, dirs["dirname"][".."] = parentdir; 
 * 2. declere the file      : dirs["dirname"]...["filename"] = "file context";
 */

var exitUrl = "http://google.com"; // if enter the exit command, jump this url.

var dirs = {".":"~"};
dirs["license.txt"] = "### LICENSE ###<br/>Kenji KUMABUCHI --shellmode--<br/>shell viewer 0.5.0 (ver.alpha) 2012/11/4 (MIT License)<br/>This application is written by Kenji KUMABUCHI.&#60;kumabuchi@ai.cs.kobe-u.ac.jp&#62;</br>'shell mode' is using plugin 'cssConsole'&#60;http://www.michalkowalkowski.com/cssConsole/&#62;(MIT License)";
dirs["contents"]={ ".":"contents" };
dirs["contents"][".."] = dirs;
dirs["contents"]["sample.txt"] = "This is a sample text file.";
dirs["contents"]["dir"] = {".":"dir"};
dirs["contents"]["dir"][".."] = dirs["contents"];
dirs["contents"]["dir"]["sample2.txt"] = "This is a sample test file 2";


