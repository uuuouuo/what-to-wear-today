import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { wrapper, content, box, h3, btnJoin, imgbox } from '@/styles/temp';
import Image from 'next/image';

export default function register() {
  const [code, setCode] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [profileImg, setprofileImg] = useState(
    'https://www.multisignaal.nl/wp-content/uploads/2021/08/blank-profile-picture-973460_1280.png',
  );
  const [intList, setIntList] = useState<string[]>([]);
  const [intItem, setIntItem] = useState('');
  const [checkBox, setCheckBox] = useState([
    { id: 1, content: '체질1', checked: false },
    { id: 2, content: '체질2', checked: false },
    { id: 3, content: '체질3', checked: false },
    { id: 4, content: '체질4', checked: false },
    { id: 5, content: '체질5', checked: false },
  ]);

  useEffect(() => {
    const _code = new URL(window.location.href).searchParams.get('code');
    _code !== null ? setCode(_code) : console.log('error');
    console.log('인가코드 : ', _code);
  }, []);

  const onChange = (event: any) => {
    const {
      target: { id, value },
    } = event;
    if (id === 'nickname') {
      setId(value);
    } else if (id === 'interest') {
      setIntItem(value);
    }
  };

  const saveFileImage = (event: any) => {
    setprofileImg(URL.createObjectURL(event.target.files[0]));
  };

  const onJoin = () => {
    console.log('가입 처리 해야함');
  };

  const onInterSubmit = (event: any) => {
    event.preventDefault();
    if (intItem.trim()) {
      setIntList((prev) => [...prev, intItem]);
    }
    setIntItem('');
  };

  const onCheck = (id: number, event: any) => {
    const newCheckBox = checkBox.map((checkItem) => {
      if (checkItem.id === id) {
        return { ...checkItem, checked: !checkItem.checked };
      }
      return checkItem;
    });
    setCheckBox(newCheckBox);
  };

  return (
    <div css={wrapper}>
      <div css={content}>
        <img css={imgbox} src={profileImg} alt="" />
        <div>
          <input type="file" accept="image/*" onChange={saveFileImage} />
        </div>
        <div>
          <label css={h3} htmlFor="passwordConfirm">
            닉네임
          </label>
          <input css={box} id="nickname" type="text" onChange={onChange} />
        </div>
        <div>
          <h3 css={h3}>관심사</h3>
          <ul>
            {intList.map((int, idx) => {
              return <li key={idx}>{int}</li>;
            })}
          </ul>
          <form onSubmit={onInterSubmit}>
            <label css={h3} htmlFor="interest">
              관심사 추가
            </label>
            <input css={box} id="interest" type="text" value={intItem} onChange={onChange} />
            <input value="추가" type="submit" />
          </form>
        </div>
        <div>
          <h3 css={h3}>체질 Check List</h3>
          {checkBox.map((cb) => (
            <span key={cb.id}>
              <input
                type="checkbox"
                id={`c${cb.id}`}
                onChange={(event) => {
                  onCheck(cb.id, event);
                }}
              />
              <label htmlFor={`c${cb.id}`}>{cb.content}</label>
            </span>
          ))}
        </div>
        <button css={btnJoin} onClick={onJoin}>
          시작하기
        </button>
      </div>
    </div>
  );
}
