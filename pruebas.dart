import 'dart:io';
import 'dart:async';

void main() {
  print("Please, enter a line \n");
  Stream cmdLine = stdin
      .transform(new StringDecoder())
      .transform(new LineTransformer());

  StreamSubscription cmdSubscription = cmdLine.listen(
    (line) => print('Entered line: $line '),
    onDone: () => print(' finished'),
    onError: (e) => /* Error on input. */);


}