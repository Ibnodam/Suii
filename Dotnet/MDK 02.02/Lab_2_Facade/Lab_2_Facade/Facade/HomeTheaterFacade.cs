using Lab_2_Facade.Subsystems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_2_Facade.Facade;


public class HomeTheaterFacade
{
    private readonly Amplifier _amp;
    private readonly Tuner _tuner;
    private readonly StreamingPlayer _player;
    private readonly Projector _projector;
    private readonly TheaterLights _lights;
    private readonly Screen _screen;

    public HomeTheaterFacade(
        Amplifier amp,
        Tuner tuner,
        StreamingPlayer player,
        Projector projector,
        TheaterLights lights,
        Screen screen)
    {
        _amp = amp;
        _tuner = tuner;
        _player = player;
        _projector = projector;
        _lights = lights;
        _screen = screen;
    }

    public void WatchMovie(string movie)
    {
        Console.WriteLine("== Начинаем просмотр фильма ==");
        _lights.Dim();
        _screen.Down();
        _projector.On();
        _amp.On();
        _player.Play(movie);
    }

    public void EndMovie()
    {
        Console.WriteLine("== Завершение просмотра ==");
        _player.Stop();
        _amp.Off();
        _projector.Off();
        _screen.Up();
        _lights.On();
    }
}