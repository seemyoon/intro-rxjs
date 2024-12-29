import {filter, Observable} from 'rxjs';

// Create a new Observable (event source)
const observable = new Observable(observer => {
    // Send values 'a' and 'b' to the data stream
    observer.next('a');
    observer.next('b');
    // Send value 'c' to the data stream with a 2000 milliseconds delay
    setTimeout(() => observer.next('c'), 2000);
});

// Subscribe to our Observable
observable
    .pipe(
        filter(value => value !== 'b'), // inside pipe() we can set some parameters, for instance filer
    ) // pipe() use to manage data stream
    .subscribe({
    // Define what to do when a new value is received
    next: (value) => {
        console.log(value);
    }
});

// Observable will be the event source after description
// observer - is the object we pass in subscribe, which is this object {
//     next: (value) =>
