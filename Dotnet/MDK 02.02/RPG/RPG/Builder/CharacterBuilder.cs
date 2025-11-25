using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.Builder;

public class CharacterBuilder
{
    private readonly Character _char = new();

    public CharacterBuilder SetName(string name)
    {
        _char.Name = name;
        return this;
    }

    public CharacterBuilder SetClass(string cls)
    {
        _char.Class = cls;
        return this;
    }

    public CharacterBuilder SetStrength(int strength)
    {
        _char.Strength = strength;
        return this;
    }

    public Character Build() => _char;
}