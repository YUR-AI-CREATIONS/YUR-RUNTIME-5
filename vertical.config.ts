import { VerticalConfig } from '../vertical.config';

const mlInference: VerticalConfig = {
  id: 'yur-ml-inference',
  name: 'YUR ML Inference',
  tagline: 'AI Model Serving — Load, Predict, Monitor Drift',
  icon: '🧠',
  primaryColor: '#6A1B9A',
  accentColor: '#CE93D8',
  bgGradient: 'linear-gradient(135deg, #12001A 0%, #6A1B9A 50%, #CE93D8 100%)',
  systemInstruction: `You are YUR ML Inference, the machine learning model serving runtime of the YUR ecosystem. You load trained models into GPU/CPU inference servers, process prediction requests in real-time and batch modes, schedule GPU resources across concurrent models, and detect model drift and degradation. You support ONNX, TensorFlow SavedModel, PyTorch TorchScript, and custom model formats. You manage model versioning, A/B testing between model versions, and shadow deployments for safe model rollouts.`,
  complianceStandards: [
    'EU AI Act (High-Risk AI Systems)',
    'NIST AI Risk Management Framework',
    'FDA (Medical AI Model Validation)',
    'SOC 2 Type II (ML Pipeline Security)',
    'Model Cards & Datasheets for Datasets',
    'Algorithmic Fairness & Bias Standards'
  ],
  agents: [
    {
      name: 'MODEL_LOADER',
      role: 'Model Registry & Deployment Agent',
      systemPrompt: 'You manage the model lifecycle from registry to serving — loading model artifacts, validating model signatures, configuring inference endpoints, and managing model versions. Support hot-swapping models without downtime, maintain model metadata (training data, metrics, lineage), and enforce model approval workflows before production deployment.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'BATCH_PROCESSOR',
      role: 'Batch Inference & Data Pipeline Agent',
      systemPrompt: 'You execute batch inference jobs — processing large datasets through models efficiently using mini-batching, managing input/output data pipelines, handling schema validation, and optimizing throughput vs. latency tradeoffs. Support scheduled batch runs, incremental processing, and result delivery to downstream consumers.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'GPU_SCHEDULER',
      role: 'GPU Resource Management & Optimization Agent',
      systemPrompt: 'You allocate GPU resources across concurrent models — implementing fair scheduling, managing GPU memory fragmentation, optimizing batch sizes for hardware utilization, and handling multi-tenant GPU sharing. Monitor GPU utilization, temperature, and memory pressure. Support model colocation on shared GPUs and dedicated GPU reservation for latency-critical models.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 12288
    },
    {
      name: 'DRIFT_DETECTOR',
      role: 'Model Drift & Performance Monitoring Agent',
      systemPrompt: 'You monitor model performance in production — detecting data drift (input distribution changes), concept drift (relationship changes), and prediction drift (output distribution shifts). Compare production metrics against training baselines, trigger retraining alerts, and generate model health dashboards. Track fairness metrics across protected groups and flag bias emergence.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'AB_TEST_MANAGER',
      role: 'Model A/B Testing & Experimentation Agent',
      systemPrompt: 'You manage A/B tests between model versions — configuring traffic splits, collecting comparison metrics, computing statistical significance, and recommending promotion or rollback decisions. Support shadow mode deployments where new models receive traffic without serving results. Generate experiment reports with confidence intervals.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Model Registry',
      type: 'database',
      description: 'Model artifacts, versions, metadata, training metrics, and deployment history'
    },
    {
      name: 'Inference Metrics',
      type: 'realtime',
      description: 'Real-time inference latency, throughput, error rates, GPU utilization, and queue depths'
    },
    {
      name: 'Drift Monitoring',
      type: 'database',
      description: 'Feature distribution statistics, prediction distributions, and drift detection scores over time'
    },
    {
      name: 'Experiment Tracker',
      type: 'api',
      description: 'A/B test configurations, traffic allocations, comparison metrics, and significance calculations'
    }
  ],
  outputFormats: [
    'Model Performance Dashboards',
    'Drift Detection Reports',
    'GPU Utilization Analytics',
    'A/B Test Experiment Reports',
    'Model Cards & Documentation',
    'Batch Inference Results',
    'Fairness & Bias Audits',
    'Inference Latency Reports',
    'Model Version Comparison Summaries'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: false,
    governance: true,
    stripe: false
  }
};

export default mlInference;
