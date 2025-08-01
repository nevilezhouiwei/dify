const translation = {
  title: '도구',
  createCustomTool: '커스텀 도구 만들기',
  customToolTip: 'Dify 커스텀 도구에 대해 더 알아보기',
  type: {
    all: '모두',
    builtIn: '내장',
    custom: '커스텀',
    workflow: '워크플로우',
  },
  contribute: {
    line1: '저는 Dify 에',
    line2: '도구를 기여하는데 관심이 있습니다.',
    viewGuide: '가이드 보기',
  },
  author: '저자',
  auth: {
    authorized: '인증됨',
    setup: '사용을 위한 인증 설정',
    setupModalTitle: '인증 설정',
    setupModalTitleDescription: '자격 증명을 구성한 후에 워크스페이스의 모든 멤버가 이 도구를 사용하여 애플리케이션을 조작할 수 있습니다.',
  },
  includeToolNum: '{{num}}개의 도구가 포함되어 있습니다',
  addTool: '도구 추가',
  addToolModal: {
    type: '타입',
    category: '카테고리',
    add: '추가',
    added: '추가됨',
    manageInTools: '도구에서 관리',
    custom: {
      title: '사용자 정의 도구 없음',
      tip: '사용자 정의 도구 생성',
    },
    workflow: {
      title: '워크플로우 도구 없음',
      tip: '스튜디오에서 워크플로우를 도구로 게시',
    },
    mcp: {
      title: 'MCP 도구 없음',
      tip: 'MCP 서버 추가',
    },
    agent: {
      title: '에이전트 전략 없음',
    },
  },
  createTool: {
    title: '커스텀 도구 만들기',
    editAction: '설정',
    editTitle: '커스텀 도구 편집',
    name: '이름',
    toolNamePlaceHolder: '도구 이름을 입력하세요',
    nameForToolCall: '도구 호출 이름',
    nameForToolCallPlaceHolder: 'getCurrentWeather, list_pets 과 같이, 기계 인지를 위해 사용됩니다.',
    nameForToolCallTip: '숫자와 문자, 밑줄만 지원합니다.',
    description: '설명',
    descriptionPlaceholder: '도구의 목적을 설명합니다. 예시로, 특정 지역의 온도 가져오기',
    schema: '스키마',
    schemaPlaceHolder: '여기에 OpenAPI 스키마를 입력하세요',
    viewSchemaSpec: 'OpenAPI-Swagger 명세 보기',
    importFromUrl: 'URL 에서 가져오기',
    importFromUrlPlaceHolder: 'https://...',
    urlError: '유효한 URL 을 입력하세요',
    examples: '예시',
    exampleOptions: {
      json: '날씨 (JSON)',
      yaml: '펫 스토어 (YAML)',
      blankTemplate: '빈 템플릿',
    },
    availableTools: {
      title: '사용 가능한 도구',
      name: '이름',
      description: '설명',
      method: '메소드',
      path: '경로',
      action: '동작',
      test: '테스트',
    },
    authMethod: {
      title: '인증 방법',
      type: '인증 유형',
      keyTooltip: 'HTTP 헤더 키입니다. 생각이 없으면 "Authorization"으로 남겨둘 수 있습니다. 또는 사용자 정의 값을 설정할 수 있습니다.',
      types: {
        none: '없음',
        apiKeyPlaceholder: 'API 키의 HTTP 헤더 이름',
        apiValuePlaceholder: 'API 키를 입력하세요',
        api_key_query: '쿼리 매개변수',
        queryParamPlaceholder: 'API 키에 대한 쿼리 매개변수 이름',
        api_key_header: '헤더',
      },
      key: '키',
      value: '값',
      queryParam: '쿼리 매개변수',
      queryParamTooltip: '전달할 API 키 쿼리 매개변수의 이름, 예: "https://example.com/test?key=API_KEY"에서의 "key".',
    },
    authHeaderPrefix: {
      title: '인증 유형',
      types: {
        basic: '베이직',
        bearer: '베어러',
        custom: '사용자 정의',
      },
    },
    privacyPolicy: '개인정보 처리방침',
    privacyPolicyPlaceholder: '개인정보 처리방침을 입력하세요',
    toolInput: {
      title: '도구 입력',
      name: '이름',
      required: '필요사항',
      method: '방식',
      methodSetting: '설정',
      methodSettingTip: '도구 설정에서 사용자가 기입',
      methodParameter: '파라미터',
      methodParameterTip: '추론 중에 LLM 이 기입',
      label: '태그',
      labelPlaceholder: '태그를 선택하세요.(선택사항)',
      description: '설명',
      descriptionPlaceholder: '파라미터의 의도를 설명하세요.',
    },
    customDisclaimer: '사용자 정의 권리 포기 문구',
    customDisclaimerPlaceholder: '사용자 정의 권리 포기 문구를 입력해주세요.',
    confirmTitle: '저장하시겠습니까?',
    confirmTip: '이 도구를 사용하는 앱은 영향을 받습니다.',
    deleteToolConfirmTitle: '이 도구를 삭제하시겠습니까?',
    deleteToolConfirmContent: '이 도구를 삭제하면 되돌릴 수 없습니다. 사용자는 더 이상 당신의 도구에 액세스할 수 없습니다.',
  },
  test: {
    title: '테스트',
    parametersValue: '파라미터 및 값',
    parameters: '파라미터',
    value: '값',
    testResult: '테스트 결과',
    testResultPlaceholder: '테스트 결과가 여기에 표시됩니다',
  },
  thought: {
    using: '사용 중',
    used: '사용됨',
    requestTitle: '요청',
    responseTitle: '응답',
  },
  setBuiltInTools: {
    info: '정보',
    setting: '설정',
    toolDescription: '도구 설명',
    parameters: '파라미터',
    string: '문자열',
    number: '숫자',
    required: '필수',
    infoAndSetting: '정보 및 설정',
    file: '파일',
  },
  noCustomTool: {
    title: '커스텀 도구가 없습니다!',
    content: 'AI 앱을 구축하기 위한 커스텀 도구를 여기서 추가 및 관리합니다.',
    createTool: '도구 만들기',
  },
  noSearchRes: {
    title: '죄송합니다. 결과가 없습니다!',
    content: '검색 결과가 없습니다.',
    reset: '검색 초기화',
  },
  builtInPromptTitle: '프롬프트',
  toolRemoved: '도구가 제거되었습니다',
  notAuthorized: '권한이 없습니다',
  howToGet: '획득 방법',
  openInStudio: '스튜디오에서 열기',
  toolNameUsageTip: 'Agent 추리와 프롬프트를 위한 도구 호출 이름',
  noTools: '도구를 찾을 수 없습니다.',
  copyToolName: '이름 복사',
  mcp: {
    create: {
      cardTitle: 'MCP 서버 추가 (HTTP)',
      cardLink: 'MCP 서버 통합에 대해 자세히 알아보기',
    },
    noConfigured: '구성되지 않은 서버',
    updateTime: '업데이트됨',
    toolsCount: '{count} 도구',
    noTools: '사용 가능한 도구 없음',
    modal: {
      title: 'MCP 서버 추가 (HTTP)',
      editTitle: 'MCP 서버 수정 (HTTP)',
      name: '이름 및 아이콘',
      namePlaceholder: 'MCP 서버 이름 지정',
      serverUrl: '서버 URL',
      serverUrlPlaceholder: '서버 엔드포인트 URL',
      serverUrlWarning: '서버 주소를 업데이트하면 이 서버에 의존하는 응용 프로그램에 지장이 발생할 수 있습니다',
      serverIdentifier: '서버 식별자',
      serverIdentifierTip: '작업 공간 내에서 MCP 서버의 고유 식별자. 소문자, 숫자, 밑줄 및 하이픈만 사용 가능. 최대 24자.',
      serverIdentifierPlaceholder: '고유 식별자, 예: my-mcp-server',
      serverIdentifierWarning: 'ID 변경 후 기존 앱에서 서버를 인식하지 못합니다',
      cancel: '취소',
      save: '저장',
      confirm: '추가 및 승인',
    },
    delete: 'MCP 서버 제거',
    deleteConfirmTitle: '{mcp}를 제거하시겠습니까?',
    operation: {
      edit: '편집',
      remove: '제거',
    },
    authorize: '권한 부여',
    authorizing: '권한 부여 중...',
    authorizingRequired: '권한이 필요합니다',
    authorizeTip: '권한 부여 후 도구가 여기에 표시됩니다.',
    update: '업데이트',
    updating: '업데이트 중',
    gettingTools: '도구 가져오는 중...',
    updateTools: '도구 업데이트 중...',
    toolsEmpty: '도구가 로드되지 않음',
    getTools: '도구 가져오기',
    toolUpdateConfirmTitle: '도구 목록 업데이트',
    toolUpdateConfirmContent: '도구 목록을 업데이트하면 기존 앱에 영향을 줄 수 있습니다. 계속하시겠습니까?',
    toolsNum: '{count} 도구가 포함됨',
    onlyTool: '1개 도구 포함',
    identifier: '서버 식별자 (클릭하여 복사)',
    server: {
      title: 'MCP 서버',
      url: '서버 URL',
      reGen: '서버 URL을 다시 생성하시겠습니까?',
      addDescription: '설명 추가',
      edit: '설명 수정',
      modal: {
        addTitle: 'MCP 서버를 활성화하기 위한 설명 추가',
        editTitle: '설명 수정',
        description: '설명',
        descriptionPlaceholder: '이 도구가 수행하는 작업과 LLM이 사용하는 방법을 설명하세요.',
        parameters: '매개변수',
        parametersTip: '각 매개변수의 설명을 추가하여 LLM이 목적과 제한 사항을 이해할 수 있도록 도와주세요.',
        parametersPlaceholder: '매개변수의 목적 및 제한 사항',
        confirm: 'MCP 서버 활성화',
      },
      publishTip: '앱이 게시되지 않았습니다. 먼저 앱을 게시하십시오.',
    },
  },
}

export default translation
