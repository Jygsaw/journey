'use client';

import { useState } from 'react';
import { updatePlace } from '@/lib/db/dbUtils';

interface InputProps {
  place: Place;
}

export function EditPlace({ place }: InputProps) {
  const [name, setName] = useState(place.name);
  const [desc, setDesc] = useState(place.desc);

  const changeName = (e) => {
    console.log("> changing name");
    setName(e.target.value);
  };
  const changeDesc = (e) => {
    console.log("> changing desc");
    setDesc(e.target.value);
  };
  const submit = async (e) => {
    console.log("> saving changes");
    e.preventDefault();
    e.stopPropagation();
    await updatePlace({
      ...place,
      name,
      desc,
    });
  };

  return (
    <form onSubmit={submit}>
      <div>
        MAP
      </div>
      <input type="text" name="name" value={name} onChange={changeName} />
      <br />
      <textarea value={desc} onChange={changeDesc} />
      <br />
      <button type="submit">Save</button>
    </form>
  )
}
