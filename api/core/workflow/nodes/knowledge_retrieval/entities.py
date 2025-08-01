from collections.abc import Sequence
from typing import Literal, Optional

from pydantic import BaseModel, Field

from core.workflow.nodes.base import BaseNodeData
from core.workflow.nodes.llm.entities import ModelConfig, VisionConfig


class RerankingModelConfig(BaseModel):
    """
    Reranking Model Config.
    """

    provider: str
    model: str


class VectorSetting(BaseModel):
    """
    Vector Setting.
    """

    vector_weight: float
    embedding_provider_name: str
    embedding_model_name: str


class KeywordSetting(BaseModel):
    """
    Keyword Setting.
    """

    keyword_weight: float


class WeightedScoreConfig(BaseModel):
    """
    Weighted score Config.
    """

    vector_setting: VectorSetting
    keyword_setting: KeywordSetting


class MultipleRetrievalConfig(BaseModel):
    """
    Multiple Retrieval Config.
    """

    top_k: int
    score_threshold: Optional[float] = None
    reranking_mode: str = "reranking_model"
    reranking_enable: bool = True
    reranking_model: Optional[RerankingModelConfig] = None
    weights: Optional[WeightedScoreConfig] = None


class SingleRetrievalConfig(BaseModel):
    """
    Single Retrieval Config.
    """

    model: ModelConfig


SupportedComparisonOperator = Literal[
    # for string or array
    "contains",
    "not contains",
    "start with",
    "end with",
    "is",
    "is not",
    "empty",
    "not empty",
    "in",
    "not in",
    # for number
    "=",
    "≠",
    ">",
    "<",
    "≥",
    "≤",
    # for time
    "before",
    "after",
]


class Condition(BaseModel):
    """
    Conditon detail
    """

    name: str
    comparison_operator: SupportedComparisonOperator
    value: str | Sequence[str] | None | int | float = None


class MetadataFilteringCondition(BaseModel):
    """
    Metadata Filtering Condition.
    """

    logical_operator: Optional[Literal["and", "or"]] = "and"
    conditions: Optional[list[Condition]] = Field(default=None, deprecated=True)


class KnowledgeRetrievalNodeData(BaseNodeData):
    """
    Knowledge retrieval Node Data.
    """

    type: str = "knowledge-retrieval"
    query_variable_selector: list[str]
    dataset_ids: list[str]
    retrieval_mode: Literal["single", "multiple"]
    multiple_retrieval_config: Optional[MultipleRetrievalConfig] = None
    single_retrieval_config: Optional[SingleRetrievalConfig] = None
    metadata_filtering_mode: Optional[Literal["disabled", "automatic", "manual"]] = "disabled"
    metadata_model_config: Optional[ModelConfig] = None
    metadata_filtering_conditions: Optional[MetadataFilteringCondition] = None
    vision: VisionConfig = Field(default_factory=VisionConfig)

    @property
    def structured_output_enabled(self) -> bool:
        # NOTE(QuantumGhost): Temporary workaround for issue #20725
        # (https://github.com/langgenius/dify/issues/20725).
        #
        # The proper fix would be to make `KnowledgeRetrievalNode` inherit
        # from `BaseNode` instead of `LLMNode`.
        return False
