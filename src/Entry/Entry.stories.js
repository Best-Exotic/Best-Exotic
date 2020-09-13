import React from 'react'
import Entry from "./Entry";

export default {
    title: 'Components/Entry',
    component: Entry,
}

const title = "Jaberwocky"
const content =
    `’Twas brillig, and the slithy toves\n\n
Did gyre and gimble in the wabe:\n
    All mimsy were the borogoves,\n
    And the mome raths outgrabe.\n
\n
“Beware the Jabberwock, my son!\n
    The jaws that bite, the claws that catch!\n
    Beware the Jubjub bird, and shun\n
The frumious Bandersnatch!”\n
\n
He took his vorpal sword in hand;\n
Long time the manxome foe he sought—\n
So rested he by the Tumtum tree\n
And stood awhile in thought.\n

    And, as in uffish thought he stood,\n
    The Jabberwock, with eyes of flame,\n
    Came whiffling through the tulgey wood,\n
    And burbled as it came!\n
\n
    One, two! One, two! And through and through\n
The vorpal blade went snicker-snack!\n
    He left it dead, and with its head\n
He went galumphing back.\n
\n
“And hast thou slain the Jabberwock?\n
    Come to my arms, my beamish boy!\n
    O frabjous day! Callooh! Callay!”\n
      He chortled in his joy.\n
\n
’Twas brillig, and the slithy toves\n
Did gyre and gimble in the wabe:\n
    All mimsy were the borogoves,\n
    And the mome raths outgrabe.\n
`

const stack = [
    {
        title: "Foo",
        content: "walalalalalalalalalalalalala"
    },
    {
        title: "Thing",
        content: "Shall I compare thee ot a summer's day? No, thought art more lovely and more temperate."
    }
]


    export const Primary = () => <Entry title={title} content={content} stack={stack} />
