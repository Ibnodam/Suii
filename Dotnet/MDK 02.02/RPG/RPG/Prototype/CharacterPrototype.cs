using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.Prototype;


public abstract class CharacterPrototype : IPrototype<CharacterPrototype>
{
    public string Name { get; set; } = "";
    public int Strength { get; set; }

    public abstract CharacterPrototype Clone();
}