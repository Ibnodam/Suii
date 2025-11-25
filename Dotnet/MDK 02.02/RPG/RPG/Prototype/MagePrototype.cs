using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.Prototype;


public class MagePrototype : CharacterPrototype
{
    public override CharacterPrototype Clone()
    {
        return new MagePrototype
        {
            Name = this.Name,
            Strength = this.Strength
        };
    }
}