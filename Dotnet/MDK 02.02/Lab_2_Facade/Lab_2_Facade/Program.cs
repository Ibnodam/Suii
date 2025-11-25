using Lab_2_Facade.Facade;
using Lab_2_Facade.Subsystems;

var amp = new Amplifier();
var tuner = new Tuner();
var player = new StreamingPlayer();
var projector = new Projector();
var lights = new TheaterLights();
var screen = new Screen();

var home = new HomeTheaterFacade(
    amp, tuner, player, projector, lights, screen
);

home.WatchMovie("The Matrix");

Console.WriteLine();
home.EndMovie();