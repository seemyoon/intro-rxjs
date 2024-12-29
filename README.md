# What's RxJs and Reactive programming?

Reactive programming is a programming paradigm that focuses on data streams and their asynchronous processing.  The basic idea is that you work with event streams and react to data changes as they occur. RxJS (Reactive Extensions for JavaScript) is a library for reactive programming that allows you to create and manage data streams.
The main entities in reactive programming are:

1. Event Source (Observable): This is an object that generates a sequence of events or data. For example, this could 
be user input, data from a server, timers, etc.

2. Event: This is the data that is generated by the event source. For example, each keystroke or data item from a 
stream.

3. Data Stream (Stream): This is a sequence of events that are transmitted from the source to the observers. A data 
stream can be synchronous or asynchronous.

4. Observer: This is an object that subscribes to a data stream and reacts to events from the stream.

## Installation

```bash
npm install rxjs
# or
yarn add rxjs
```